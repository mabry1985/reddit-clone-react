import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
import Header from './components/Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterPostList: [],
    };
    this.handleAddingNewPostToList = this.handleAddingNewPostToList.bind(this);

    this.handleUpVote = this.handleUpVote.bind(this);
    this.handleDownVote = this.handleDownVote.bind(this);
  }

  handleAddingNewPostToList(newPost) {
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({ masterPostList: newMasterPostList });
  }

  //sweet tutorial for crud functionality for arrays https://www.robinwieruch.de/react-state-array-add-update-remove

  handleUpVote(i) {
    this.setState(state => {
      const postArray = state.masterPostList.map((post, j) => {
        if (j === i) {
          post.votes += 1;
          return post;
        } else {
          return post;
        }
      });
      return {
        postArray,
      };
    });
  }

  handleDownVote(i) {
    this.setState(state => {
      const postArray = state.masterPostList.map((post, j) => {
        if (j === i) {
          post.votes -= 1;
          return post;
        } else {
          return post;
        }
      });
      return {
        postArray,
      };
    });
  }

  render() {
    return (
      <BrowserRouter>
        <main className="container">
          <Header />
          <Routes
            onAddingNewPostToList={this.handleAddingNewPostToList} masterPostList={this.state.masterPostList}
            onUpVote={this.handleUpVote}
            onDownVote={this.handleDownVote}
          />
        </main>
      </BrowserRouter>
    );
  }
};

export default App;
