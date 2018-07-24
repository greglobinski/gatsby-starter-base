import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Header = props => {
  const { title, subTitle } = props;

  return (
    <header className="header">
      <Link to="/">
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
      </Link>
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
};

export default Header;
