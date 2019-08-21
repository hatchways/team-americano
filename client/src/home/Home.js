// ==============================================
// Home Component:
// ==============================================

// Dependencies:
import React from "react";
import api from "../api";

// Components:
import Info from "./components/Info";
import Chat from "./components/Chat";

// Home Component:
export default class Home extends React.Component {

  componentDidMount = async () => {
    // Set Document Title:
    document.title = "Start conversing with friends today!";

    // API Call:
    const response = await api.get("/api/user", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    });

    const { data } = response.data;

    this.setState({
      user: {
        name: data.name,
        email: data.email,
        _id: data._id,
        language: data.language
      }
    });

  }

  constructor(props) {
    super(props);

    this.state = {
      user: ""
    };
  }

  render() {
    return (
      <div style={{ padding: "0", margin: "0" }} className="row">
        <Info user={this.state.user} />
        <Chat />
      </div>
    );
  }
}
