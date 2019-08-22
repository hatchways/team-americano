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
            <Avatar name={ props.user.name } size="45" round />
            <span className="font-weight-bold text-dark" style={ styles.username }>{ props.user.name }</span>
          </div>
          <NavLink className="navbar-text">
            <i style={ styles.settings } className="fas fa-ellipsis-h text-secondary"></i>
          </NavLink>
        </nav>
        <Router>
          <div style={ styles.linkContainer }>
            <NavLink exact to="/" activeClassName="text-dark" className="text-muted" activeStyle={ styles.active } style={{ ...styles.link, paddingRight: "16px" }}>Chats</NavLink>
            <NavLink exact to="/contact" activeClassName="text-dark" className="text-muted" activeStyle={ styles.active } style={ styles.link }>Contacts</NavLink>
          </div>
          <Search />
          <Referral />
          <Route exact path="/" component={Contacts} />
          <Route exact path="/contact" component={Invitations} />
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

  username: {
    paddingLeft: "12px"
  },

  linkContainer: {
    padding: "6px 18px"
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
