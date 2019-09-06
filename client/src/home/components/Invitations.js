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
import User from "./User";

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
    <Invitation id={ props.id } key={ index } invitation={ invitation } />
  ));

  const UserList = props.users.map( (user, index) => (
    <User key={ index } user={ user } />
  ));

  const Users = props.search ? (
    <div>
      <p className="font-weight-bold">Users:</p>
      { UserList.length ? UserList : <p>No matching users found.</p>}
    </div>
  ) : null;

  return (
    <div className={classes.contactsDiv}>
      <List className={classes.list}>
        { Users }
        <p className="font-weight-bold">Invitations:</p>
        { InvitationList.length ? InvitationList : <p>No new invitations to show.</p> }
      </List>
    </div>
  );
}
