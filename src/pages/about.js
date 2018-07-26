import React from 'react';
import Layout from '../components/Layout';
import Article from '../components/Article';
import Heading from '../components/Article/Heading';
import Bodytext from '../components/Article/Bodytext';

const AboutPage = props => {
  const { location } = props;

  return (
    <Layout location={location} seoTitle="Page A">
      <Article>
        <Heading title="About" />
        <Bodytext>
          <p>Well, how to start...</p>
        </Bodytext>
      </Article>
    </Layout>
  );
};

export default AboutPage;
