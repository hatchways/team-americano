// ==============================================
// Auth Required Component:
// ==============================================

// Dependencies:
import React from "react";
import { Redirect, Route } from "react-router-dom";

// Services:
import { authenticationService } from "./services";

// Auth Required Component:
export const PrivateRoute = ({
  component: Component,
  redirect="/login",
  chat=false,
  ...rest
}) => (
  <Route {...rest} render={props => {
    if (!authenticationService.authenticated) {
        // not logged in so redirect to login page with the return url
        return <Redirect to={{ pathname: redirect, state: { from: props.location } }} />
    }
    // authorised so return component
    return <Component chat={chat} {...props} />
  }}/>
);
