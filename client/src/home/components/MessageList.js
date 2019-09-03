// ==============================================
// Message List Component:
// ==============================================

// Dependencies:
import React from "react";
import { useState } from "react";
import { ChatFeed, Message } from "react-chat-ui";

let messages = [
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
  const [messagesList, setMessagesList] = useState([]);

  // Listening to "new message" event emitted from the server
  // Add msg content to messages list
  props.connection.on("new message", function(msg) {
    msg = JSON.parse(msg);
    let updatedMessagesList = messagesList;
    updatedMessagesList.push(
      new Message({
        id: 0,
        message: msg.content
      })
    );
    console.log(updatedMessagesList);
    setMessagesList([...updatedMessagesList]);
  });

  return (
    <div className="container-fluid" style={styles.messageList} >
      <ChatFeed
        messages={messagesList}
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
