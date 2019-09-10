import React from 'react';
import NewPostForm from '../components/NewPostForm';
import PostList from '../components/PostList';

const SubReddit = (props) => (
  console.log(props),
  <div>
    <h2>Subreddit</h2>
    <NewPostForm onAddingNewPostToList={props.onAddingNewPostToList}/>
    <PostList masterPostList={props.masterPostList}/>
  </div>
);

export default SubReddit;
