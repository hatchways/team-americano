// ==============================================
// Referral Component:
// ==============================================

// Dependencies:
import React from "react";

// Material UI:
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

// Referral Component:
export default function Referral(props) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function copyToClipboard(e) {
    e.preventDefault();
    let text = document.getElementById("referralLink");
    text.select();
    document.execCommand("copy");
  }

  const theme = createMuiTheme({
    typography: {
      dialog: {
        fontFamily: "Open Sans"
      }
    }
  });

  const useStyles = makeStyles(theme => ({
    referralDialog: {
      textAlign: "center"
    },
    button: {
      backgroundColor: "#3A8DFF",
      fontWeight: "600",
      padding: "20px 70px 20px 70px",
      marginTop: "20px",
      marginBottom: "15px"
    },
    copyLinkButton: {
      margin: "0",
      backgroundColor: "#3A8DFF",
      fontWeight: "600",
      width: "40%"
    },
    inviteButton: {
      fontWeight: "600",
      textTransform: "none",
      border: "none",
      padding: "0",
      color: "#3A8DFF",
      "&:hover": {
        border: "none"
      }
    },
    text: {
      paddingTop: "20px"
    }
  }));

  const classes = useStyles();

  return (
    <div>
      <MuiThemeProvider theme={theme}>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
          className={classes.inviteButton}
        >
          + Invite Friends
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
          className={classes.referralDialog}
        >
          <DialogTitle id="form-dialog-title" className={classes.dialogTitle}>
            Invite friends to messenger
          </DialogTitle>
          <DialogContent>
            <form>
              <p>Send your friends an invite email</p>
              <TextField
                variant="outlined"
                id="email"
                label="Enter friends email address"
                type="email"
                fullWidth
              />
              <p className={classes.text}>Or share referral link:</p>
              <TextField
                variant="outlined"
                id="referralLink"
                value={props.url + "/join/" + props.id}
                fullWidth
                InputProps={{
                  endAdornment: (
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      className={classes.copyLinkButton}
                      onClick={copyToClipboard}
                    >
                      Copy Link
                    </Button>
                  )
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Send Invite
              </Button>
            </form>
          </DialogContent>
        </Dialog>
      </MuiThemeProvider>
    </div>
  );
}
