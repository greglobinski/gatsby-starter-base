import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import config from '../../../content/meta/config';
import Footer from '../Footer';
import Header from '../Header';

import '../../styles/borders.css';

const Layout = ({ children }) => {
  const { siteUrl, copyrightNote } = config;

  return (
    <StaticQuery
      query={graphql`
        query LayoutQuery {
          footnote: markdownRemark(
            fileAbsolutePath: { regex: "/parts/footnote/" }
          ) {
            html
          }
        }
      `}
      render={data => {
        const { footnote } = data;

        return (
          <div className="layout">
            <Header />
            {children}
            <Footer footnote={footnote} />
          </div>
        );
      }}
    />
  );
};

export default Layout;

{
  /* <>
  <Helmet titleTemplate={`%s | ${data.site.siteMetadata.title}`
  } defaultTitle={data.site.siteMetadata.title} />
  <div>
    {children}
  </div >
</> */
}
