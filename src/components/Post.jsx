import React from 'react';
import PropTypes from 'prop-types';

function Post(props) {
  console.log();
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <p><span onClick={() => props.onUpVote(props.id)}>&uArr;</span>
         <strong>{props.votes}</strong>
         <span onClick={() => props.onDownVote(props.id)}>&dArr;</span>
      </p>
    </div>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
  id: PropTypes.number,
  onUpVote: PropTypes.func,
  onDownVote: PropTypes.func,
};

export default Post;
