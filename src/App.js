import React, { Component } from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from 'react-redux';

import HomePage from './containers/HomePage';
import PostsPage from './containers/PostsPage';
import CreatePostPage from './containers/CreatePostPage';
import PostPage from './containers/PostPage';
import LoginPage from './containers/LoginPage';

import { handlerLogout } from './actions/users';

import PrivateRoute from './containers/PrivateRoute';

class App extends Component {

  handlerLogout = () => {
    this.props.handlerLogout();
  }

  render() {
    return (
      <Router>
        <Header isLogged={this.props.isLogged} handlerLogout={this.handlerLogout} />

        <div className="container">
          <Route path="/" exact component={HomePage} />
          <Route path="/login" exact component={LoginPage} />

          <PrivateRoute path="/posts" exact component={PostsPage} />
          <PrivateRoute path="/posts/create" component={CreatePostPage} />
          <PrivateRoute path="/post/:postID" component={PostPage} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      isLogged: state.users.isLogged
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handlerLogout: () => {
      dispatch(handlerLogout());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

