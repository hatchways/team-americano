// ==============================================
// User Component:
// ==============================================

// Dependencies:
import React from "react";
import Avatar from "react-avatar";

// Services:
import { invitationService } from "../../services";

// Material UI:
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

// Invitation Component:
export default function User(props) {

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
      margin: "5px 0",
      backgroundColor: "rgb(249,250,252)",
      "&:hover": {
        backgroundColor: "white"
      }
    }
  }));

  const classes = useStyles();

  const invite = () => {
    return async () => invitationService.createInvitation(props.user._id);
  }

  return (
    <Paper className={classes.paper}>
      <ListItem className={classes.listItem}>
        <ListItemAvatar>
          <Avatar name={ props.user.name } round size="40" />
        </ListItemAvatar>
        <ListItemText disableTypography primary={ props.user.name } />
        <div className={classes.userActionsDiv}>
          <Button onClick={ invite() } className={classes.userActionButton}>Invite</Button>
        </div>
      </ListItem>
    </Paper>
  );
}

