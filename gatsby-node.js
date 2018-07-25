const _ = require('lodash');
const path = require('path');
const Promise = require('bluebird');

const { createFilePath } = require(`gatsby-source-filesystem`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const filePath = createFilePath({ node, getNode });

    const separtorIndex = ~filePath.indexOf('--') ? filePath.indexOf('--') : 0;
    const slugStart = separtorIndex ? separtorIndex + 2 : 0;

    const slug = `${separtorIndex ? '/' : ''}${filePath.substring(slugStart)}`;
    const identifier = slug.replace(/\//g, '');
    const prefix = separtorIndex ? filePath.substring(1, separtorIndex) : '';

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    });
    createNodeField({
      node,
      name: `identifier`,
      value: identifier,
    });
    createNodeField({
      node,
      name: `prefix`,
      value: prefix,
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/PostTemplate.js');

    resolve(
      graphql(`
        {
          allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "//posts//" } }
            sort: { fields: [fields___prefix], order: DESC }
            limit: 1000
          ) {
            edges {
              node {
                fileAbsolutePath
                fields {
                  slug
                  identifier
                  prefix
                }
                frontmatter {
                  title
                  category
                }
              }
            }
          }
        }
      `).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
        }

        const items = result.data.allMarkdownRemark.edges;

        console.log(items);

        // Create posts
        const posts = items.filter(item =>
          /posts/.test(item.node.fileAbsolutePath)
        );
        posts.forEach(({ node }, index) => {
          const slug = node.fields.slug;
          const identifier = node.fields.identifier;
          const next = index === 0 ? undefined : posts[index - 1].node;
          const prev =
            index === posts.length - 1 ? undefined : posts[index + 1].node;

          createPage({
            path: slug,
            component: postTemplate,
            context: {
              slug,
              identifier,
              prev,
              next,
            },
          });
        });
      })
    );
  });
};

exports.onCreateWebpackConfig = ({
  stage,
  rules,
  loaders,
  plugins,
  actions,
}) => {
  switch (stage) {
    case 'build-javascript':
      actions.setWebpackConfig({
        module: {
          rules: [
            {
              test: /\.yaml$/,
              include: path.resolve('data'),
              loader: 'yaml',
            },
          ],
        },
      });
  }
};
