import React from "react";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import Type from "./Type";

const DUMMY_MESSAGES = [
  {
    senderId: "Santiago",
    text: "Wazzup how are you?",
    time: "10:45"
  },
  {
    senderId: "Santiago",
    text: "Nice idea! Where to go?",
    time: "10:55"
  },
  {
    senderId: "User",
    text: "Hi! Let's go for a walk!"
  }
];

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: DUMMY_MESSAGES
    };
  }
  render() {
    return (
      <div
        id="chat"
        style={{
          width: "67vw",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}
      >
        <ChatHeader />
        <Type />
      </div>
    );
  }
}

export default Chat;
