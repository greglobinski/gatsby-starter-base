import React from 'react';
import Layout from '../components/Layout';
import Article from '../components/Article';
import Heading from '../components/Article/Heading';
import Bodytext from '../components/Article/Bodytext';

const AboutPage = props => {
  return (
    <Layout>
      <Article>
        <Heading>
          <h1>About</h1>
        </Heading>
        <Bodytext>
          <p>Well, how to start...</p>
        </Bodytext>
      </Article>
    </Layout>
  );
};

export default AboutPage;
