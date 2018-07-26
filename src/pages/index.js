import React from 'react';
import Layout from '../components/Layout';
import Article from '../components/Article';
import Heading from '../components/Article/Heading';
import Bodytext from '../components/Article/Bodytext';

const IndexPage = props => {
  return (
    <Layout>
      <Article>
        <Heading title="Hello world!" />
        <Bodytext>
          <p>That's a home page content</p>
        </Bodytext>
      </Article>
    </Layout>
  );
};

export default IndexPage;
