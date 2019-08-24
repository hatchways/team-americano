// ==============================================
// Contacts Component:
// ==============================================

// Dependencies:
import React from "react";

// Material UI:
import { makeStyles } from "@material-ui/styles";
import List from "@material-ui/core/List";

// Components:
import Contact from "./Contact";

// Contacts Component:
export default function Contacts(props) {

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

  // Contact Components:
  const ContactList = props.contacts
    .filter( contact => {
      return contact.name.indexOf(props.search) === -1;
    })
    .map( (contact, index) => (
      <Contact key={index} contact={contact} />
    ));

  return (
    <div className={classes.contactsDiv}>
      <List className={classes.list}>
        { ContactList }
      </List>
    </div>
  );
}
