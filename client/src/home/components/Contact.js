// ==============================================
// Contact Component:
// ==============================================

// Dependencies:
import React from "react";
import Avatar from "react-avatar";

// Material UI:
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";

// Contact Component:
export default function Contact(props) {

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

    paper: {
      margin: "5px 0",
      backgroundColor: "rgb(249,250,252)",
      "&:hover": {
        backgroundColor: "white"
      }
    }
  }));

  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <ListItem className={classes.listItem}>
        <ListItemAvatar>
          <Avatar name={ props.contact.name } round size="40" />
        </ListItemAvatar>
        <ListItemText disableTypography primary={ props.contact.name } />
      </ListItem>
    </Paper>
  )
}
