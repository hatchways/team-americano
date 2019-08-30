// ==============================================
// Message List Component:
// ==============================================

// Dependencies:
import React from "react";
import { useState } from "react";
import { ChatFeed, Message } from "react-chat-ui";

// Socket IO:
import * as io from "socket.io-client";

const messages = [
  new Message({
    id: 1,
    message: "Hey there"
  }),
  new Message({
    id: 0,
    message: "Whats up"
  }),
  new Message({
    id: 0,
    message: "Isn't this app so cool!"
  })
];

// Message List Component:
export default function MessageList(props) {
  const [messagesList, setMessagesList] = useState(messages);

  // Listening to "new message" event emitted from the server
  // Add msg content to messages list
  const socket = io();
  socket.on("new message", function(msg) {
    msg = JSON.parse(msg);
    setMessagesList(
      messagesList.push(
        new Message({
          id: 0,
          message: msg.content
        })
      )
    );
  });

  return (
    <div className="container" style={styles.messageList}>
      <ChatFeed
        messages={messages}
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
