import React from "react";
import { MuiThemeProvider } from "@material-ui/core";

import { theme } from "./themes/theme";
import Router from "./router";

import "./App.css";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Router />
    </MuiThemeProvider>
  );
}

export default App;
