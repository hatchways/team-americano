// ==============================================
// Invitation Component:
// ==============================================

// Dependencies:
import React from "react";
import api from "../../api";
import Avatar from "react-avatar";

// Material UI:
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

// Invitation Component:
export default function Invitation(props) {

  // Styles:
  const useStyles = makeStyles(theme => ({
    listItem: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      marginLeft: "15px",
      "& img": {
        width: "100%",
        borderRadius: "50%"
      },
      "& ListItemText": {
        fontFamily: "Open Sans"
      }
    },
    userActionsDiv: {
      marginRight: "10px"
    },
    userActionButton: {
      fontFamily: "Open Sans"
    },
    paper: {
      margin: "5px",
      backgroundColor: "rgb(249,250,252)",
      "&:hover": {
        backgroundColor: "white"
      }
    }
  }));

  const classes = useStyles();

  const token = localStorage.getItem("token");

  const acceptInvitation = async () => {

    try {
      await api.put("/api/invitation/" + props.invitation._id + "/accept", {}, {
        headers: {
          Authorization: "Bearer " + token
        }
      });
    } catch(e) {
      console.log(e);
    }
  }

  const ignoreInvitation = async () => {
    try {
      await api.put("/api/invitation/" + props.invitation._id + "/ignore", {}, {
        headers: {
          Authorization: "Bearer " + token
        }
      });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <Paper className={classes.paper}>
      <ListItem className={classes.listItem}>
        <ListItemAvatar>
          <Avatar name={ props.invitation.requester.name } round size="40" />
        </ListItemAvatar>
        <ListItemText disableTypography primary={ props.invitation.requester.name } />
        <div className={classes.userActionsDiv}>
          <Button onClick={ ignoreInvitation } className={classes.userActionButton}>Ignore</Button>
          <Button onClick={ acceptInvitation } className={classes.userActionButton}>Accept</Button>
        </div>
      </ListItem>
    </Paper>
  );
}

