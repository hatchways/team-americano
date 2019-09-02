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
    <Invitation key={ index } invitation={ invitation } />
  ));

  return (
    <div className={classes.contactsDiv}>
      <List className={classes.list}>
        <p className="font-weight-bold">Invitations:</p>
        { InvitationList.length ? InvitationList : <p>No new invitations to show.</p> }
      </List>
    </div>
  );
}
