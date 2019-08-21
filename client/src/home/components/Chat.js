// ==============================================
// Chat Component:
// ==============================================

// Dependencies:
import React from "react";

// Components:
import ChatHeader from "./ChatHeader";
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

// Chat Component:
export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: DUMMY_MESSAGES
    };
  }
  render() {
    return (
      <div style={{ padding: "0" }} className="col-sm-8 col-xs-12">
        <ChatHeader />
        <Type />
      </div>
    );
  }
}
