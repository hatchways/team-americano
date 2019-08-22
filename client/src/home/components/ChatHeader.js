// ==============================================
// Chat Header Component:
// ==============================================

// Dependencies:
import React from "react";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";

// Material UI:
import Hidden from "@material-ui/core/Hidden";
import Switch from "@material-ui/core/Switch";

// Chat Header Component:
export default function ChatHeader(props) {
  return (
    <div style={ styles.container }>
      <nav className="navbar">
        <div className="navbar-brand">
          <Avatar name={ props.conversation.name } size="35" round />
          <span style={ styles.name } className="font-weight-bold">{ props.conversation.name }</span>
        </div>
        <div className="navbar-text">
          <Hidden xsDown>
            <span>Original Language</span>
            <Switch color="default" style={ styles.switch }/>
          </Hidden>
          <Link to="/">
            <i className="fas fa-ellipsis-h text-secondary"></i>
          </Link>
        </div>
      </nav>
    </div>
  )
}

// Component Styles:
const styles = {

  container: {
    padding: "16px 0",
    boxShadow: "0px 2px 5px -5px rgb(0, 0, 0)",
    width: "100%"
  },

  name: {
    paddingLeft: "12px",
    fontSize: "20px"
  },

  switch: {
    marginRight: "70px"
  }
}
