import React from 'react';
import Layout from '../components/Layout';
import Article from '../components/Article';
import Heading from '../components/Article/Heading';
import Bodytext from '../components/Article/Bodytext';

const ContactPage = props => {
  const { location } = props;

  return (
    <Layout location={location} seoTitle="Page A">
      <Article>
        <Heading title="Contact" />
        <Bodytext>
          <p>Send me an email.</p>
        </Bodytext>
      </Article>
    </Layout>
  );
};

export default ContactPage;
