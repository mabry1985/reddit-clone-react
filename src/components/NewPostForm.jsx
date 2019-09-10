import React from 'react';
import PropTypes from 'prop-types';
import './NewPostForm.scss';

function NewPostForm(props) {
  let _title = null;
  let _body = null;

  function HandleNewPostFormSubmission(event) {
    event.preventDefault();
    props.onAddingNewPostToList({ title: _title.value, body: _body.value, votes: 0 });
    _title.value = '';
    _body.value = '';
  }

  return (
    <div>
      <form onSubmit={HandleNewPostFormSubmission}>
        <input
          type="text"
          id="title"
          placeholder="Post Title"
          ref={(input) => { _title = input; }}

        />
        <br />
        <textarea
          id="body"
          placeholder="Post Content"
          ref={(textarea) => { _body = textarea; }}

        />
        <br />
        <button type="submit">Post</button>
      </form>
    </div>
  );
}

NewPostForm.propTypes = {
  onAddingNewPostToList: PropTypes.func,
};

export default NewPostForm;
