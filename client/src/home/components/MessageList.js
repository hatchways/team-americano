// ==============================================
// Message List Component:
// ==============================================

// Dependencies:
import React from "react";

// Socket IO:
import * as io from "socket.io-client";

// Message List Component:
export default function MessageList(props) {
  // Listening to "new message" event emitted from the server
  const socket = io();
  socket.on("new message", function(msg) {
    console.log(msg);
  });

  return <div style={styles.messageList} />;
}

// Component Styles:
const styles = {
  messageList: {
    height: "68vh",
    overflowY: "scroll"
  }
};
