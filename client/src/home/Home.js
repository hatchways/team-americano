// ==============================================
// Home Component:
// ==============================================

// Dependencies:
import React from "react";

// Services:
import { userService } from "../services";

// Components:
import Info from "./components/Info";
import Chat from "./components/Chat";

// Material UI:
import Hidden from "@material-ui/core/Hidden";

// Home Component:
export default class Home extends React.Component {

  componentDidMount = async () => {
    // Set Document Title:
    document.title = "Start conversing with friends today!";

    // API Call:
    const contacts = await userService.getConversations(this.state.search);
    const invitations = await userService.getInvitations();

    // Set State:
    this.setState({
      contacts,
      invitations
    });
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
      user: JSON.parse(localStorage.getItem("currentUser")),
      conversation: {
        name: "Ashanti"
      },
      invitations: [],
      contacts: [],
      search: ""
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.reload = this.reload.bind(this);
  }

  render() {
    if (this.props.chat) return (
      <div style={{ padding: "0", margin: "0" }} className="row">
        <Hidden xsDown>
          <Info history={this.props.history} chatId={this.props.match.params.chat} chat reload={this.reload} search={this.state.search} updateSearch={this.updateSearch} contacts={this.state.contacts} invitations={this.state.invitations} user={this.state.user} />
        </Hidden>
        <Chat id={this.state.user._id} conversation={this.state.conversation} />
      </div>
    );

    return (
      <div style={{ padding: "0", margin: "0" }} className="row">
        <Info history={this.props.history} reload={this.reload} search={this.state.search} updateSearch={this.updateSearch} contacts={this.state.contacts} invitations={this.state.invitations} user={this.state.user} />
        <Hidden xsDown>
          <Chat id={this.state.user._id} conversation={this.state.conversation} />
        </Hidden>
      </div>
    );
  }
}
