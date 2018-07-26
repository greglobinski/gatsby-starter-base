import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import 'prismjs/themes/prism-okaidia.css';

import Article from '../components/Article';
import Layout from '../components/Layout';
import Page from '../components/Page';

const PageTemplate = props => {
  const {
    data: { page },
  } = props;

  return (
    <Layout>
      <Article>
        <Page page={page} />
      </Article>
    </Layout>
  );
};

PageTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
};

export default PageTemplate;

export const query = graphql`
  query PageTemplateQuery($slug: String!) {
    page: markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      fileAbsolutePath
      fields {
        slug
        prefix
      }
      frontmatter {
        title
      }
    }
    authorNote: markdownRemark(fileAbsolutePath: { regex: "/authorNote/" }) {
      html
    }
  }
`;
