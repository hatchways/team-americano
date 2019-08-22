import React from "react";
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/List";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";

function Contacts() {
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
          </ListItem>
        </Paper>
        <Paper className={classes.paper}>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <Avatar>
                <img src={require("../../assets/info_assets/Chiumbo.png")} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText disableTypography primary="Chiumbo" />
          </ListItem>
        </Paper>
        <Paper className={classes.paper}>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <Avatar>
                <img src={require("../../assets/info_assets/Jeffrey.png")} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText disableTypography primary="Jeffrey" />
          </ListItem>
        </Paper>
        <Paper className={classes.paper}>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <Avatar>
                <img src={require("../../assets/info_assets/Julia.png")} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText disableTypography primary="Julia" />
          </ListItem>
        </Paper>
        <Paper className={classes.paper}>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <Avatar>
                <img src={require("../../assets/info_assets/Stephen.png")} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText disableTypography primary="Stephen" />
          </ListItem>
        </Paper>
        <Paper className={classes.paper}>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <Avatar>
                <img src={require("../../assets/info_assets/Tony.png")} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText disableTypography primary="Tony" />
          </ListItem>
        </Paper>
        <Paper className={classes.paper}>
          <ListItem className={classes.listItem}>
            <ListItemAvatar>
              <Avatar>
                <img src={require("../../assets/info_assets/Wendy.png")} />
              </Avatar>
            </ListItemAvatar>
            <ListItemText disableTypography primary="Wendy" />
          </ListItem>
        </Paper>
      </List>
    </div>
  );
}

export default Contacts;
