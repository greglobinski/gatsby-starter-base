import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import config from '../../../content/meta/config';
import menu from '../../../content/meta/menu';
import Footer from '../Footer';
import Header from '../Header';
import Seo from '../Seo';

import '../../styles/graph.css';

const Layout = props => {
  const { children, location, seoTitle = '', seoDescription = '' } = props;

  const {
    headerTitle,
    headerSubTitle,
    siteTitle,
    siteDescription,
    siteLanguage,
    siteUrl,
  } = config;

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
            <Header title={headerTitle} subTitle={headerSubTitle} menu={menu} />
            <main>{children}</main>
            <Footer footnote={footnote} />
            <Seo
              language={siteLanguage}
              title={seoTitle ? seoTitle : siteTitle}
              description={seoDescription ? seoDescription : siteDescription}
              url={siteUrl}
            />
          </div>
        );
      }}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object,
  seoTitle: PropTypes.string,
  seoDescription: PropTypes.string,
};

export default Layout;
