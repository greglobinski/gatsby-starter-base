import { StaticQuery, graphql } from 'gatsby';
import React from 'react';

import config from '../../../content/meta/config';
import Footer from '../Footer';
import Header from '../Header';

import '../../styles/borders.css';

const Layout = ({ children }) => {
  const { headerTitle, headerSubTitle } = config;

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
            <Header title={headerTitle} subTitle={headerSubTitle} />
            {children}
            <Footer footnote={footnote} />
          </div>
        );
      }}
    />
  );
};

export default Layout;
