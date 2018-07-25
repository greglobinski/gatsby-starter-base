import PropTypes from 'prop-types';
import React from 'react';
//import Loadable from "react-loadable";

import Heading from '../Article/Heading';
import Bodytext from '../Article/Bodytext';
import Meta from './Meta';
import Author from './Author';
import Share from './Share';
import NextPrev from './NextPrev';
import Comments from './Comments';

// import Loading from "../Loading";

// const LoadableShare = Loadable({
//   loader: () => import("./Share"),
//   loading() {
//     return <Loading />;
//   }
// });

const Post = props => {
  const {
    post,
    post: {
      html,
      fields: { prefix, slug },
      frontmatter: { title, category },
    },
    authorNote,
    next: nextPost,
    prev: prevPost,
  } = props;

  return (
    <React.Fragment>
      <header>
        <Heading title={title} />
        <Meta prefix={prefix} category={category} />
      </header>
      <Bodytext html={html} />
      <footer>
        <Author note={authorNote} />
        <Share post={post} />
        <NextPrev next={nextPost} prev={prevPost} />
        <Comments slug={slug} />
      </footer>
    </React.Fragment>
  );
};

Post.propTypes = {
  post: PropTypes.object.isRequired,
  authorNote: PropTypes.string,
  next: PropTypes.object,
  prev: PropTypes.object,
};

export default Post;
