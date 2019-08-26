// ==============================================
// Info Component:
// ==============================================

// Dependencies:
import React from "react";
import { NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Avatar from "react-avatar";

// Components:
import Search from "./Search";
import Referral from "./Referral";
import Contacts from "./Contacts";
import Invitations from "./Invitations";

// Info Component:
export default function Info(props) {

  return (
    <div style={ styles.infoBar } className="col-sm-4 col-xs-12 bg-light">
      <div style={ styles.container } className="container">
        <nav className="navbar">
          <div className="navbar-brand">
            <Avatar style={styles.avatar} name={ props.user.name } size="45" round />
            <span className="font-weight-bold text-dark" style={ styles.username }>{ props.user.name }</span>
          </div>
          <NavLink to="/" className="navbar-text">
            <i style={ styles.settings } className="fas fa-ellipsis-h text-secondary"></i>
          </NavLink>
        </nav>
        <Router>
          <div style={ styles.linkContainer }>
            <NavLink exact to={ props.chat ? "/chat/" + props.chatId : "/" } activeClassName="text-dark" className="text-muted" activeStyle={ styles.active } style={{ ...styles.link, paddingRight: "16px" }}>Chats</NavLink>
            <NavLink exact to={ props.chat ? "/chat/" + props.chatId + "/invitation" : "/invitation" } activeClassName="text-dark" className="text-muted" activeStyle={ styles.active } style={ styles.link }>Invitations</NavLink>
          </div>
          <Search search={props.search} updateSearch={props.updateSearch} />
          <Referral />
          <Route exact path={ props.chat ? "/chat/" + props.chatId : "/" } render={() => (
            <Contacts search={ props.search } contacts={ props.contacts } />
          )} />
          <Route exact path={ props.chat ? "/chat/" + props.chatId + "/invitation" : "/invitation" } render={() => (
            <Invitations reload={ props.reload } search={ props.search } invitations={ props.invitations } />
          )} />
        </Router>
      </div>
    </div>
  )
}

// Component Styles:
const styles = {

  infoBar: {
    height: "100vh",
    overflowY: "scroll"
  },

  container: {
    paddingTop: "10px"
  },

  avatar: {
    marginLeft: "-18px"
  },

  username: {
    paddingLeft: "12px"
  },

  linkContainer: {
    padding: "6px 0"
  },

  link: {
    fontSize: "18px",
    textDecoration: "none"
  },

  active: {
    fontSize: "24px"
  },

  settings: {
    fontSize: "12px",
  }
};
