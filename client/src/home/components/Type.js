// ==============================================
// Type Component:
// ==============================================

// Dependencies:
import React from "react";

// Material UI:
import TextField from "@material-ui/core/TextField";

//Socket IO:
import * as io from "socket.io-client";

// Type Component:
export default function Type(props) {
  const socket = io();

  // Emit "chat message" event to server when user hits enter
  function handleInput(e) {
    if (e.keyCode === 13) {
      socket.emit("chat message", {
        timestamp: Date(Date.now()).toString(),
        sender: props.id,
        content: e.target.value
      });
      e.preventDefault();
      e.target.value = "";
    }
  }

  return (
    <div className="container" style={styles.container}>
      <TextField
        style={styles.type}
        id="searchBar"
        variant="outlined"
        placeholder="Type a message here"
        onKeyDown={handleInput}
        inputProps={{
          style: { fontFamily: "Open Sans" },
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
    width: "98%",
    fontFamily: "open sans",
    marginBottom: "10px"
  }
};
