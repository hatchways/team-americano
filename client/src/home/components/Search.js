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
        inputProps={{
          style: { fontFamily: "Open Sans" },
        }}
      />
      <p style={ styles.result }>Results for: <span className="font-italic">{props.search}</span></p>
    </div>
  );
}

// Component Styles:
const styles = {

  search: {
    width: "100%"
  },

  result: {
    paddingTop: "5px"
  }
}