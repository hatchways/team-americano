// ==============================================
// Router:
// ==============================================

// Dependencies:
import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

// Components:
import Register from './auth/Register';
import Login from './auth/Login';
import Home from './home/Home';

// Function to check user authentication:
const checkAuth = () => {
  return Boolean(localStorage.getItem("token"));
}

// Router Component:
export default class Router extends React.Component {

  render() {
    return (
      <BrowserRouter>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact={true} path="/" render={props => {
            return (checkAuth() ?
              <Home {...props} /> : <Redirect to="/login" />
            )}}
          />
          <Route path="/chat/:chat" render={props => {
            return (checkAuth() ?
              <Home {...props} chat /> : <Redirect to="/login" />
            )}}
          />
      </BrowserRouter>
    );
  }
}
