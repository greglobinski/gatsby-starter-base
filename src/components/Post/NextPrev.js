import { Link } from 'gatsby';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import PropTypes from 'prop-types';
import React from 'react';

const NextPrev = props => {
  const {
    next: {
      fields: { prefix: nextPrefix, slug: nextSlug } = {},
      frontmatter: { title: nextTitle } = {},
    } = {},
    prev: {
      fields: { prefix: prevPrefix, slug: prevSlug } = {},
      frontmatter: { title: prevTitle } = {},
    } = {},
  } = props;

  return (
    <div className="nextprev">
      {nextSlug && (
        <Link to={nextSlug}>
          <FaArrowRight />
          <h4>
            {nextTitle} <time>{nextPrefix} </time>
          </h4>
        </Link>
      )}
      {prevSlug && (
        <Link to={prevSlug}>
          <FaArrowLeft />
          <h4>
            {prevTitle} <time>{prevPrefix}</time>
          </h4>
        </Link>
      )}
    </div>
  );
};

NextPrev.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
};

export default NextPrev;
