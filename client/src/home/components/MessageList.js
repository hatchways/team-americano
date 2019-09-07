// ==============================================
// Message List Component:
// ==============================================

// Dependencies:
import React from "react";
import { ChatFeed, Message } from "react-chat-ui";

// Message List Component:
export default function MessageList(props) {

  // Listening to "new message" event emitted from the server
  // Add msg content to messages list
  props.connection.on("new message", function(msg) {
    console.log(msg);
  });

  return (
    <div className="container-fluid" style={styles.messageList} >
      <ChatFeed
        messages={props.messages}
        isTyping={false}
        hasInputField={false}
        showSenderName
        bubblesCentered={false}
        bubbleStyles={{
          text: {
            fontSize: 16
          },
          chatbubble: {
            borderRadius: 20,
            padding: 10
          }
        }}
      />
    </div>
  );
}

// Component Styles:
const styles = {
  messageList: {
    height: "68vh",
    overflowY: "scroll"
  }
};
