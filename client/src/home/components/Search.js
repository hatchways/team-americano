// ==============================================
// Search Component:
// ==============================================

// Dependencies:
import React from "react";

// Material UI:
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

// Search Component:
export default function Search(props) {

  return (
    <div style={ styles.container }>
      <TextField
        style={ styles.search }
        className="bg-muted"
        id="searchBar"
        variant="filled"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <i className="fas fa-search" />
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
    padding: "0 10px"
  },

  search: {
    width: "100%"
  }
}