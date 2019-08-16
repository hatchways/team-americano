import React from "react";
import Info from "./Info";
import Chat from "./Chat";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div
        id="home"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
          width: "100vw",
          height: "100vh",
          maxHeight: "100%"
        }}
      >
        <Info />
        <Chat />
      </div>
    );
  }
}

export default Home;
