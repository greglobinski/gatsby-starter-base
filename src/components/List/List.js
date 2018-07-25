import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

const List = props => {
  const { items } = props;

  return (
    <ul className="list">
      {items.map(item => {
        const {
          frontmatter: { title },
          fields: { slug },
        } = item;

        return (
          <li key={slug}>
            <Link to={slug}>{title}</Link>
          </li>
        );
      })}
    </ul>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
};

export default List;
