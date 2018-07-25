import React from 'react';
import PropTypes from 'prop-types';
import FacebookProvider, { Comments as FBComments } from 'react-facebook';

import config from '../../../content/meta/config';

const Comments = props => {
  const { facebook = '340409213030244', slug } = props;

  return (
    <div id="post-comments" className="comments">
      <FacebookProvider appId={facebook}>
        <FBComments
          href={`${config.siteUrl}${slug}`}
          width="100%"
          colorScheme="light"
        />
      </FacebookProvider>
    </div>
  );
};

Comments.propTypes = {
  slug: PropTypes.string.isRequired,
  facebook: PropTypes.object,
};

export default Comments;
