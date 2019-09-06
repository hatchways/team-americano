// ==============================================
// Router:
// ==============================================

// Dependencies:
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components:
import { PrivateRoute } from "./AuthRequired";
import Register from "./auth/Register";
import Login from "./auth/Login";
import Home from "./home/Home";

// Router Component:
export default class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/join/:user_id" component={Register} />
          <PrivateRoute exact chat path="/chat" component={Home} />
          <PrivateRoute exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}
