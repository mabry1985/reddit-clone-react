import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, SubReddit } from './containers';

const Routes = (props) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/subreddit"
    render={()=><SubReddit
    onAddingNewPostToList={props.onAddingNewPostToList}
    masterPostList={props.masterPostList}
    onUpVote={props.onUpVote}
    onDownVote={props.onDownVote}/>}
    />
  </Switch>
);

export default Routes;
