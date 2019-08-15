import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/styles";

function Search() {
  const useStyles = makeStyles(theme => ({
    searchDiv: {
      textAlign: "center"
    },
    textField: {
      width: "95%",
      backgroundColor: "rgb(233,238,250)"
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.searchDiv}>
      <TextField
        id="searchBar"
        className={classes.textField}
        hiddenLabel
        variant="filled"
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <i class="fas fa-search" />
            </InputAdornment>
          ),
          disableUnderline: true,
          style: { fontFamily: "Open Sans", paddingBottom: "1em" }
        }}
      />
    </div>
  );
}

export default Search;
