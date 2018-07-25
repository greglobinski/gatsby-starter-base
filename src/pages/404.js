import React from 'react';
import Layout from '../components/Layout';
import Article from '../components/Article';
import Heading from '../components/Article/Heading';
import Bodytext from '../components/Article/Bodytext';

const NotFoundPage = props => {
  const { location } = props;

  return (
    <Layout location={location}>
      <Article>
        <Heading title="NOT FOUND" />
        <Bodytext>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Bodytext>
      </Article>
    </Layout>
  );
};

export default NotFoundPage;
