import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import Branding from './Branding';

const Header = props => {
  const { title, subTitle = '' } = props;

  return (
    <header className="header">
      <Branding title={title} subTitle={subTitle} />
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
};

export default Header;
