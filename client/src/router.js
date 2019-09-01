// ==============================================
// Router:
// ==============================================

// Dependencies:
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Components:
import { PrivateRoute } from './AuthRequired'
import Register from './auth/Register';
import Login from './auth/Login';
import Home from './home/Home';

// Router Component:
export default class Router extends React.Component {

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <PrivateRoute chat={true} path="/chat/:chat" component={Home} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
