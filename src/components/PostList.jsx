import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostList(props) {
  return (
    <div>
      {props.masterPostList.map((post, index) =>
        <Post
          title={post.title}
          body={post.body}
          votes={post.votes}
          key={index}
          id={parseInt(index)}
          onUpVote={props.onUpVote}
          onDownVote={props.onDownVote}
        />
    )}
    </div>
  );
}

PostList.propTypes = {
  masterPostList: PropTypes.array,
};

export default PostList;
