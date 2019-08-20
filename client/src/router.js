// ==============================================
// Router:
// ==============================================

// Dependencies:
import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import axios from 'axios';

// Custom Components:
import Register from './pages/auth/Register';
import Login from './pages/auth/Login';
import Home from './pages/home/Home';

// Function to check authentication:
const getAuth = async () => {
  const token = localStorage.getItem("token");

  const response = await axios.get("http://localhost:3001/api/user", {
    headers: {
      Authorization: "Bearer " + token
    }
  });

  return response.status === 200 || response.status === 304;
}

export default class Router extends React.Component {

  render() {
    return (
      <BrowserRouter>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route exact={true} path="/" render={props => {
            return (getAuth() ?
              <Home /> : <Redirect to="/login" />
            )}}  />
      </BrowserRouter>
    );
  }
}
