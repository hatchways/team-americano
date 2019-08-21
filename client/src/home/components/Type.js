// ==============================================
// Type Component:
// ==============================================

// Dependencies:
import React from "react";

// Material UI:
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

// Type Component:
export default function Type() {

  return (
    <div style={ styles.container }>
      <TextField
        className="bg-muted"
        style={ styles.type }
        id="searchBar"
        hiddenLabel
        variant="filled"
        placeholder="Type something..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <i class="far fa-smile" />
              <i class="far fa-clone" />
            </InputAdornment>
          ),
          disableUnderline: true,
          style: { fontFamily: "Open Sans", paddingBottom: "1em" }
        }}
      />
    </div>
  );
}

// Component Styles:
const styles = {

  container: {
    paddingTop: "5px"
  },

  type: {
    width: "100%"
  }
}