// ==============================================
// Type Component:
// ==============================================

// Dependencies:
import React from "react";

// Material UI:
import TextField from "@material-ui/core/TextField";

// Type Component:
export default function Type(props) {
  // Emit "chat message" event to server when user hits enter
  function handleInput(e) {
    if (e.keyCode === 13) {
      props.connection.emit("chat message", {
        sender: props.user._id,
        content: e.target.value,
        language: props.user.language,
        conversation: props.chatId
      });
      e.preventDefault();
      e.target.value = "";
    }
  }

  return (
    <div className="container-fluid" style={styles.container}>
      <TextField
        style={styles.type}
        id="searchBar"
        variant="outlined"
        placeholder="Type a message here"
        onKeyDown={handleInput}
        inputProps={{
          style: { fontFamily: "Open Sans" }
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
