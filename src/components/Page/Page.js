import PropTypes from 'prop-types';
import React from 'react';
//import Loadable from "react-loadable";

import Heading from '../Article/Heading';
import Bodytext from '../Article/Bodytext';

const Page = props => {
  const {
    page: {
      html,
      frontmatter: { title },
    },
  } = props;

  return (
    <React.Fragment>
      <header>
        <Heading title={title} />
      </header>
      <Bodytext html={html} />
    </React.Fragment>
  );
};

Page.propTypes = {
  page: PropTypes.object.isRequired,
};

export default Page;
