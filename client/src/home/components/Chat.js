// ==============================================
// Chat Component:
// ==============================================

// Dependencies:
import React from "react";

// Socket IO:
import * as io from "socket.io-client";

// Components:
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

// Chat Component:
export default class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: DUMMY_MESSAGES
    };
  }

  render() {
    const socket = io();
    return (
      <div
        style={{ padding: "0", height: "100vh" }}
        className="col-xs-12 col-sm-8"
      >
        <ChatHeader conversation={this.props.conversation} />
        <div>
          <MessageList connection={socket} />
          <Type id={this.props.id} connection={socket} />
        </div>
      </div>
    );
  }
}
