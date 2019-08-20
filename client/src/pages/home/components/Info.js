import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Search from "./Search";
import Referral from "./Referral";
import Contacts from "./Contacts";
import Invitations from "./Invitations";

export default function Info(props) {
  const useStyles = makeStyles(theme => ({
    info: {
      backgroundColor: "rgb(245,247,251)",
      display: "inline-block",
      width: "33vw",
      height: "100vh",
      fontFamily: "Open Sans"
    },
    topSection: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around"
    },
    profileDiv: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    profilePic: {
      borderRadius: "50%",
      width: "15%",
      padding: "15px"
    },
    profileName: {},
    menuIconDiv: {
      display: "inline-block",
      color: "rgb(170,189,230)",
      marginRight: "10px"
    },
    buttonSection: {
      marginLeft: "10px"
    },
    link: {
      textDecoration: "none"
    },

    tabButton: {
      fontFamily: "Open Sans",
      textTransform: "none",
      color: "grey",
      "&:hover": {
        color: "black",
        backgroundColor: "transparent"
      }
    },
    inviteButton: {
      textDecoration: "none",
      color: "#3A8DFF",
      display: "inline-block",
      marginLeft: "15px",
      "&:hover": {
        color: "#004bff"
      }
    }
  }));

  const classes = useStyles();

  return (
    <div className={classes.info}>
      <div className={classes.topSection}>
        <div className={classes.profileDiv}>
          <img
            className={classes.profilePic}
            src={require("../../../assets/info_assets/thomas.png")}
            alt="Profile"
          />
          <h1 className={classes.profileName}>Thomas</h1>
        </div>
        <div className={classes.menuIconDiv}>
          <i class="fas fa-ellipsis-h" />
        </div>
      </div>
      <Router>
        <div className={classes.buttonSection}>
          <Link to="/" className={classes.link}>
            <Button className={classes.tabButton}>
              <h1>Contacts</h1>
            </Button>
          </Link>
          <Link to="/invitations" className={classes.link}>
            <Button className={classes.tabButton}>
              <h1>Invitations</h1>
            </Button>
          </Link>
        </div>
        <Search />
        <Referral />
        <Route exact path="/" component={Contacts} />
        <Route path="/invitations" component={Invitations} />
      </Router>
    </div>
  );
}
