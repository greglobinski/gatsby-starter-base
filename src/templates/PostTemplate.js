import PropTypes from 'prop-types';
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/Layout';
import Article from '../components/Article';
import Post from '../components/Post';

require('prismjs/themes/prism-okaidia.css');

const PostTemplate = props => {
  const {
    location,
    data: { post },
    pathContext: { next, prev },
  } = props;

  return (
    <Layout location={location}>
      <Article>
        <Post post={post} next={next} prev={prev} />
      </Article>
    </Layout>
  );
};

PostTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pathContext: PropTypes.object.isRequired,
};

export default PostTemplate;

export const postQuery = graphql`
  query PostBySlug($slug: String!, $identifier: String!) {
    post: markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fileAbsolutePath
      fields {
        slug
        prefix
      }
      frontmatter {
        title
        category
      }
    }
  }
`;
