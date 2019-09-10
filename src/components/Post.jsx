import React from 'react';
import PropTypes from 'prop-types';

function Feed(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <p>&uArr; <strong>{props.votes}</strong> &dArr;</p>
    </div>
  );
}

Feed.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired,
};

export default Feed;
