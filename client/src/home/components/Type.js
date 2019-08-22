// ==============================================
// Type Component:
// ==============================================

// Dependencies:
import React from "react";

// Material UI:
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";

//Socket IO:
import * as io from "socket.io-client";

// Type Component:
export default function Type() {
  const socket = io();

  // Emit "chat message" event to server when user hits enter
  function handleInput(e) {
    if (e.keyCode === 13) {
      socket.emit("chat message", {
        timestamp: Date(Date.now()).toString(),
        sender: "",
        content: e.target.value
      });
      e.preventDefault();
      e.target.value = "";
    }
  }

  return (
    <div style={styles.container}>
      <TextField
        className="bg-muted"
        style={styles.type}
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
        onKeyDown={handleInput}
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
};
