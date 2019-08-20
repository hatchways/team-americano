import React from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import { makeStyles } from "@material-ui/styles";
import * as io from "socket.io-client";

const socket = io();

function Type(props) {
  const useStyles = makeStyles(theme => ({
    typeDiv: {
      padding: "40px"
    },
    typeField: {
      width: "100%",
      backgroundColor: "rgb(233,238,250)",
      "& i": {
        marginRight: "10px"
      }
    }
  }));

  function handleInput(e) {
    if (e.keyCode === 13) {
      socket.emit("chat message", e.target.value);
      e.target.value = "";
      return false;
    }
  }

  const classes = useStyles();
  return (
    <div className={classes.typeDiv}>
      <TextField
        id="searchBar"
        className={classes.typeField}
        hiddenLabel
        variant="filled"
        placeholder="Type something..."
        onKeyDown={handleInput}
        InputProps={{
          endAdornment: (
            <InputAdornment className={classes.typeIcon} position="start">
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

export default Type;
