import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import config from '../../../content/meta/config';

const Header = props => {
  return (
    <header className="header">
      <Link to="/">
        <h1>{config.headerTitle}</h1>
        <h2>{config.headerSubTitle}</h2>
      </Link>
    </header>
  );
};

Header.propTypes = {};

export default Header;
