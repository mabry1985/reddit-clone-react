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
  }

  handleAddingNewPostToList(newPost) {
    let newMasterPostList = this.state.masterPostList.slice();
    newMasterPostList.push(newPost);
    this.setState({ masterPostList: newMasterPostList });
  }

  render() {
    return (
      <BrowserRouter>
        <main className="container">
          <Header />
          <Routes onAddingNewPostToList={this.handleAddingNewPostToList} masterPostList={this.state.masterPostList}/>
        </main>
      </BrowserRouter>
    );
  }
};

export default App;
