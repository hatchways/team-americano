// ==============================================
// Home Component:
// ==============================================

// Dependencies:
import React from "react";
import queryString from "query-string";
import { tiny } from "tiny-shortener";

// Services:
import { invitationService, conversationService } from "../services";

// Components:
import Info from "./components/Info";
import Chat from "./components/Chat";

// Material UI:
import Hidden from "@material-ui/core/Hidden";

// Home Component:
export default class Home extends React.Component {

  tinyUrl = async () => {
    const { location } = window;
    let url = `${location.protocol}//`;
    if (process.env.NODE_ENV === "development") {
      url += `${location.hostname}:${location.port}`;
    } else {
      url += `${location.hostname}`;
    }
    try {
      const alias = await tiny(url, "chat");
      this.setState({
        url: alias
      });
    } catch(e) {
      console.log("Error", e);
      this.setState({
        url
      })
    }
  }

  componentDidMount = async () => {
    // Set Document Title:
    document.title = "Start conversing with friends today!";

    // Get URL:
    this.tinyUrl();

    // Get Query String:
    const { chat, q } = queryString.parse(this.props.location.search);

    // API Call:
    const invitations = await invitationService.getAll();
    const contacts = await conversationService.getAll(this.state.search);

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

  constructor(props) {
    super(props);

    this.state = {
      user: JSON.parse(localStorage.getItem("currentUser")),
      conversation: {
        name: "Ashanti"
      },
      invitations: [],
      contacts: [],
      search: "",
      url: ""
    };

    this.updateSearch = this.updateSearch.bind(this);
    this.tinyUrl = this.tinyUrl.bind(this);
  }

  render() {
    if (this.props.chat) return (
      <div style={{ padding: "0", margin: "0" }} className="row">
        <Hidden xsDown>
          <Info url={this.state.url} toggleInvite={this.toggleInvite} invitation={this.state.invitation} history={this.props.history} chatId={this.props.match.params.chat} chat reload={this.reload} search={this.state.search} updateSearch={this.updateSearch} contacts={this.state.contacts} invitations={this.state.invitations} user={this.state.user} />
        </Hidden>
        <Chat id={this.state.user._id} conversation={this.state.conversation} />
      </div>
    );

    return (
      <div style={{ padding: "0", margin: "0" }} className="row">
        <Info url={this.state.url} toggleInvite={this.toggleInvite} invitation={this.state.invitation} history={this.props.history} reload={this.reload} search={this.state.search} updateSearch={this.updateSearch} contacts={this.state.contacts} invitations={this.state.invitations} user={this.state.user} />
        <Hidden xsDown>
          <Chat id={this.state.user._id} conversation={this.state.conversation} />
        </Hidden>
      </div>
    );
  }
}
