import React from 'react';
import NewPostForm from '../components/NewPostForm';
import PostList from '../components/PostList';

const SubReddit = (props) => (
  <div>
    <h2>Subreddit</h2>
    <NewPostForm onAddingNewPostToList={props.onAddingNewPostToList}/>
    <PostList masterPostList={props.masterPostList}
              onUpVote={props.onUpVote}
              onDownVote={props.onDownVote}
    />

  </div>
);

export default SubReddit;
