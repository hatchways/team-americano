// ==============================================
// Search Component:
// ==============================================

// Dependencies:
import React from "react";
import {DebounceInput} from "react-debounce-input";

// Material UI:
import TextField from "@material-ui/core/TextField";

// Search Component:
export default function Search(props) {

  return (
    <div style={ styles.container }>
      <DebounceInput
        onChange={props.updateSearch}
        debounceTimeout={300}
        element={TextField}
        placeholder="Search"
        style={ styles.search }
        minLength={2}
      />
      <p style={ styles.result }>Results for: {props.search}</p>
    </div>
  );
}

// Component Styles:
const styles = {

  container: {
    padding: "0 10px"
  },

  search: {
    width: "100%"
  },

  result: {
    paddingTop: "5px"
  }
}