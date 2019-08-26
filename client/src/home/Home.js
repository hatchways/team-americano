// ==============================================
// Home Component:
// ==============================================

// Dependencies:
import React from "react";
import { Redirect } from "react-router-dom";
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
    const status = await this.callApi();

    if (!status) {
      localStorage.setItem("token", null);
      this.setState({
        redirect: true
      });
    }

  }

  callApi = async () => {
    const token = localStorage.getItem("token");

    try {
      const user = await api.get("/api/user?q=" + this.state.search, {
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
      return true;
    } catch(e) {
      console.log(e);
      return false;
    }
  }

  updateSearch(e) {
    this.setState({
      search: e.target.value
    });
  }

  reload() {
    this.forceUpdate();
  }

  constructor(props) {
    super(props);

    this.state = {
      user: "",
      conversation: {
        name: "Ashanti"
      },
      invitations: [],
      contacts: [],
      redirect: false,
      search: ""
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.reload = this.reload.bind(this);
  }

  render() {
    if (this.state.redirect) return <Redirect to="/login" />;
    return (
      <div style={{ padding: "0", margin: "0" }} className="row">
        <Info reload={this.reload} search={this.state.search} updateSearch={this.updateSearch} contacts={this.state.contacts} invitations={this.state.invitations} user={this.state.user} />
        <Chat id={this.state.user._id} conversation={this.state.conversation} />
      </div>
    );
  }
}
