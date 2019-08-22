import React from "react";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

function Invitations() {
  const useStyles = makeStyles(theme => ({
    constactsDiv: {
      maxHeight: "100%",
      overflow: "scroll"
    },
    list: {
      display: "flex",
      flexDirection: "column",
      alignContent: "stretch"
    },
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

  return (
    <div className={classes.contactsDiv}>
      <List className={classes.list}>
        <Paper className={classes.paper}>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <Avatar>
                <img src={require("../../assets/info_assets/Ashanti.png")} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText disableTypography primary="Ashanti" />
            <div className={classes.userActionsDiv}>
              <Button className={classes.userActionButton}>Ignore</Button>
              <Button className={classes.userActionButton}>Accept</Button>
            </div>
          </ListItem>
        </Paper>
        <Paper className={classes.paper}>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <Avatar>
                <img src={require("../../assets/info_assets/Cheng.png")} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText disableTypography primary="Cheng" />
            <div className={classes.userActionsDiv}>
              <Button className={classes.userActionButton}>Ignore</Button>
              <Button className={classes.userActionButton}>Accept</Button>
            </div>
          </ListItem>
        </Paper>
      </List>
    </div>
  );
}

export default Invitations;
