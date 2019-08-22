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
    const token = localStorage.getItem("token");

    try {
      const user = await api.get("/api/user", {
        headers: {
          Authorization: "Bearer " + token
        }
      });

      const { data } = user.data;

      const invitations = await api.get("/api/invitation", {
        headers: {
          Authorization: "Bearer " + token
        }
      });

      this.setState({
        user: {
          name: data.name,
          email: data.email,
          _id: data._id,
          language: data.language
        },
        invitations: invitations.data.data,
        contacts: data.contacts
      });

    } catch(e) {
      console.log(e);
    }

  }

  constructor(props) {
    super(props);

    this.state = {
      user: "",
      conversation: {
        name: "Ashanti"
      },
      invitations: [],
      contacts: []
    };
  }

  render() {
    return (
      <div style={{ padding: "0", margin: "0" }} className="row">
        <Info invitations={this.state.invitations} user={this.state.user} contacts={this.state.contacts} />
        <Chat conversation={this.state.conversation} />
      </div>
    );
  }
}
