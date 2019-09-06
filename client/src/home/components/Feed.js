// ==============================================
// Feed Component:
// ==============================================

// Dependencies:
import React, { useState } from "react";

// Components:
import Search from "./Search";
import Contacts from "./Contacts";
import Invitations from "./Invitations";
import Referral from "./Referral";

// Feed Component:
export default function Feed(props) {
  const [invitation, setInvitation] = useState(false);

  function _toggleInvite() {
    setInvitation(!invitation);
  }

  return (
    <div>
      {
        invitation ? (
          <div style={styles.linkContainer}>
            <span style={{...styles.link, paddingRight: "16px"}} className="text-muted" onClick={_toggleInvite}>Chats</span>
            <span style={styles.active} className="text-dark" >Contacts</span>
          </div>
        ) : (
          <div style={styles.linkContainer}>
            <span style={{...styles.active, paddingRight: "16px"}} className="text-dark">Chats</span>
            <span style={styles.link} className="text-muted" onClick={_toggleInvite}>Contacts</span>
          </div>
        )
      }
      <Search
        search={props.search}
        updateSearch={props.updateSearch}
      />
      <Referral url={props.url} id={props.id} />
      {
        invitation ? (
          <Invitations search={ props.search } users={ props.users } invitations={ props.invitations } />
        ) : (
          <Contacts contacts={ props.contacts } />
        )
      }
    </div>
  );
}

// Component Styles:
const styles = {
  linkContainer: {
    padding: "6px 0"
  },

  link: {
    fontSize: "18px",
    cursor: "pointer"
  },

  active: {
    fontSize: "24px",
    cursor: "pointer"
  },
}
