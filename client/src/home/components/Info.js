// ==============================================
// Info Component:
// ==============================================

// Dependencies:
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Avatar from "react-avatar";

// Services:
import { authenticationService } from "../../services";

// Material UI:
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

// Components:
import Feed from "./Feed";

// Info Component:
export default function Info(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  function handleShowMenu(e) {
    setAnchorEl(e.currentTarget);
  }

  async function handleLogout() {
    setAnchorEl(null);
    await authenticationService.logout();
    return props.history.push("/login");
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div style={styles.infoBar} className="col-sm-4 col-xs-12 bg-light">
      <div style={styles.container} className="container">
        <nav className="navbar">
          <div className="navbar-brand">
            <Avatar style={styles.avatar} name={props.user.name} size="45" round />
            <span
              className="font-weight-bold text-dark"
              style={styles.username}
            >
            {props.user.name}
            </span>
          </div>
          <div>
            <Button onClick={handleShowMenu}>
              <i
                style={styles.settings}
                className="fas fa-ellipsis-h text-secondary"
              ></i>
            </Button>
            <Menu
              id="user-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleLogout}>
                <NavLink to="/login" style={styles.menuItem}>
                  Logout
                </NavLink>
              </MenuItem>
            </Menu>
          </div>
        </nav>
        <Feed
          id={props.id}
          users={props.users}
          search={props.search}
          updateSearch={props.updateSearch}
          invitations={props.invitations}
          contacts={props.contacts}
        />
      </div>
    </div>
  );
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

  settings: {
    fontSize: "12px"
  },

  menuItem: {
    textDecoration: "none",
    color: "black",
    fontFamily: "Open Sans"
  }
};
