import React from "react";
import { makeStyles } from "@material-ui/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Typography from "@material-ui/core/Typography";

function ChatHeader() {
  const [state, setState] = React.useState({
    checked: true
  });

  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });
  };

  const useStyles = makeStyles(theme => ({
    chatHeader: {
      display: "flex",
      justifyContent: "space-around",
      width: "100%",
      boxShadow: "0px 2px 5px -2px rgba(0, 0, 0, 0.4)"
    },
    currentNameDiv: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center"
    },
    currentName: {
      marginRight: "40px"
    },
    contactStatusDiv: {
      display: "flex",
      alignItems: "center"
    },
    statusIcon: {
      width: "1%",
      marginRight: "5px"
    },
    settings: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center"
    },
    switchLabel: {
      fontFamily: "Open Sans"
    },
    settingsIconDiv: {}
  }));

  const classes = useStyles();

  return (
    <div className={classes.chatHeader}>
      <div className={classes.currentNameDiv}>
        <div>
          <h1 className={classes.currentName}>Santiago</h1>
        </div>
        <div className={classes.contactStatusDiv}>
          <img
            className={classes.statusIcon}
            src={require("../../../assets/green_circle.png")}
          />
          <p className={classes.contactStatus}>Online</p>
        </div>
      </div>
      <div className={classes.settings}>
        <div className={classes.switchButton}>
          <FormControlLabel
            className={classes.languageToggle}
            control={
              <Switch
                checked={state.checked}
                onChange={handleChange("checked")}
                value="checked"
                color="primary"
              />
            }
            label={
              <Typography className={classes.switchLabel}>
                Original Language
              </Typography>
            }
          />
        </div>
        <div className={classes.settingsIconDiv}>
          <i class="fas fa-ellipsis-h" />
        </div>
      </div>
    </div>
  );
}

export default ChatHeader;
