import React from 'react';
import PropTypes from 'prop-types';

const Heading = props => {
  const { title, children } = props;

<<<<<<< HEAD
  return <header>{title ? <h1>{title}</h1> : children}</header>;
=======
  return (
    <header className="heading">{title ? <h1>{title}</h1> : children}</header>
  );
>>>>>>> minimal
};

Heading.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Heading;
