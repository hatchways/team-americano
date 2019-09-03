// ==============================================
// Home Component:
// ==============================================

// Dependencies:
import React from "react";
import queryString from "query-string";

// Services:
import { invitationService, conversationService, userService } from "../services";

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

    // Get Query String:
    const { chat, q } = queryString.parse(this.props.location.search);

    // API Call:
    const invitations = await invitationService.getAll();
    const contacts = await userService.getContacts(this.state.search);
    const conversations = await conversationService.getAll(this.state.search);

    // Set State:
    this.setState({
      contacts,
      conversations,
      invitations
    });
  }

  updateSearch(e) {
    this.setState({
      search: e.target.value
    });
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
      conversations: [],
      search: ""
    };

    this.updateSearch = this.updateSearch.bind(this);
  }

  render() {
    if (this.props.chat) return (
      <div style={{ padding: "0", margin: "0" }} className="row">
        <Hidden xsDown>
          <Info toggleInvite={this.toggleInvite} invitation={this.state.invitation} history={this.props.history} chatId={this.props.match.params.chat} chat reload={this.reload} search={this.state.search} updateSearch={this.updateSearch} contacts={this.state.contacts} invitations={this.state.invitations} user={this.state.user} />
        </Hidden>
        <Chat id={this.state.user._id} conversation={this.state.conversation} />
      </div>
    );

    return (
      <div style={{ padding: "0", margin: "0" }} className="row">
        <Info toggleInvite={this.toggleInvite} invitation={this.state.invitation} history={this.props.history} reload={this.reload} search={this.state.search} updateSearch={this.updateSearch} contacts={this.state.contacts} invitations={this.state.invitations} user={this.state.user} />
        <Hidden xsDown>
          <Chat id={this.state.user._id} conversation={this.state.conversation} />
        </Hidden>
      </div>
    );
  }
}
