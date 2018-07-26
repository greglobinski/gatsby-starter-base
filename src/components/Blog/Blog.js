import PropTypes from 'prop-types';
import React from 'react';

import Item from './Item';

const Blog = props => {
  const { posts } = props;

  return (
    <ul className="blog">
      {posts.map(post => {
        const {
          fields: { identifier },
        } = post;
        return <Item key={identifier} post={post} />;
      })}
    </ul>
  );
};

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default Blog;
