import React from "react";
import { MuiThemeProvider } from "@material-ui/core";
import { BrowserRouter, Route } from "react-router-dom";

import { theme } from "./themes/theme";
import Home from "./pages/Home";
import Referral from "./pages/Referral";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Route path="/home" component={Home} />
          <Route path="/referral" component={Referral} />
        </BrowserRouter>
      </MuiThemeProvider>
    );
  }
}

export default App;
