// ==============================================
// Message List Component:
// ==============================================

// Dependencies:
import React from "react";

// Message List Component:
export default function MessageList(props) {
  return (
    <div style={ styles.messageList }></div>
  );
}

// Component Styles:
const styles = {
  messageList: {
    height: "68vh",
    overflowY: "scroll"
  }
}
