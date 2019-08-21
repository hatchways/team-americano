// ==============================================
// Chat Header Component:
// ==============================================

// Dependencies:
import React from "react";

// Material UI:
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

// Chat Header Component:
export default function ChatHeader(props) {
  return (
    <div style={ styles.container }>
      <div style={ styles.header } className="container">
        Hello World
      </div>
    </div>
  )
}

// Component Styles:
const styles = {

  container: {
    padding: "24px 0",
    boxShadow: "0px 2px 5px -5px rgb(0, 0, 0)",
    width: "100%"
  },

  header: {
    margin: "0 0 0 20px"
  }
}
