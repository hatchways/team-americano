// ==============================================
// Invitations Component:
// ==============================================

// Dependencies:
import React from "react";

// Material UI:
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";

// Components:
import Invitation from "./Invitation";

// Invitations Component:
export default function Invitations(props) {

  // Styles:
  const useStyles = makeStyles(theme => ({
    constactsDiv: {
      maxHeight: "100%",
      overflow: "scroll"
    },
    list: {
      display: "flex",
      flexDirection: "column",
      alignContent: "stretch"
    }
  }));

  const classes = useStyles();

  // Invitation Components:
  const InvitationList = props.invitations.map( (invitation, index) => (
    <Invitation reload={ props.reload } key={ index } invitation={ invitation } />
  ));

  return (
    <div className={classes.contactsDiv}>
      <List className={classes.list}>
        { InvitationList }
      </List>
    </div>
  );
}
