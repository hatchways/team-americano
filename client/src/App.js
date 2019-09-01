// ==============================================
// React Application:
// ==============================================

// Dependencies:
import React from "react";
import { CookiesProvider } from "react-cookie";
import { MuiThemeProvider } from "@material-ui/core";

// Services:
import { authenticationService } from "./services";

// Components:
import { theme } from "./themes/theme";
import Router from "./Router";

// Css:
import "./App.css";

// Application:
export default class App extends React.Component {

  async componentDidMount() {
    await authenticationService.getAuthentication();
  }

  render() {
    return (
      <CookiesProvider>
        <MuiThemeProvider theme={theme}>
          <Router />
        </MuiThemeProvider>
      </CookiesProvider>
    );
  }
}
