import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Image from "../assets/bg-img.png";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh",
    fontFamily: "Open Sans"
  },
  login: {
    marginTop: "20px",
    display: "flex",
    direction: "row",
    justify: "space-around",
    alignItems: "center",
    float: "right"
  },
  loginButton: {
    background: "white",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: "#3A8DFF",
    padding: "20px 70px 20px 70px",
    marginLeft: "20px"
  },
  createButton: {
    backgroundColor: "#3A8DFF",
    fontFamily: "Open Sans",
    fontWeight: "600",
    padding: "20px 70px 20px 70px",
    marginTop: "50px"
  },
  speechIcon: {
    color: "white",
    textAlign: "center"
  },
  motto: {
    display: "inline-block",
    color: "white",
    textAlign: "center",
    marginTop: "40%",
    fontSize: "200%"
  },
  image: {
    backgroundImage: `linear-gradient(to bottom, rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0)), url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundHeight: "100%",
    backgroundPosition: "center",
    backgroundSize: "100% 100%",
    padding: "50px",
    height: "100vh"
  },
  form: {
    textAlign: "center",
    display: "inline-block",
    marginLeft: "50%",
    marginTop: "20%"
  },
  input: {
    fontFamily: "Open Sans"
  },
  languageLabel: {
    fontFamily: "Open Sans"
  },
  menuItem: {
    fontFamily: "Open Sans"
  },
  flag: {
    width: "5%",
    float: "left"
  }
}));

export default function Signup() {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    language: "eng"
  });

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item container xs={false} sm={4} md={4}>
        <div id="signUpContent" className={classes.image}>
          <div className={classes.motto}>
            <div className={classes.speechIcon}>
              <i class="far fa-comment-dots fa-5x" />
            </div>
            <p>Converse with anyone with any language.</p>
          </div>
        </div>
      </Grid>
      <Grid item xs={6} sm={8} md={5}>
        <div className={classes.login}>
          <div>
            <p>Already have an account?</p>
          </div>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            className={classes.loginButton}
          >
            Login
          </Button>
        </div>
        <Grid container>
          <form className={classes.form}>
            <h1>Create an account.</h1>
            <TextField
              type="email"
              variant="standard"
              margin="normal"
              required="true"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              InputLabelProps={{ style: { fontFamily: "Open Sans" } }}
              InputProps={{ style: { fontFamily: "Open Sans" } }}
            />
            <TextField
              type="password"
              variant="standard"
              margin="normal"
              required="true"
              fullWidth
              id="password"
              label="Password"
              helperText="At least 6 characters."
              name="password"
              autoComplete="password"
              FormHelperTextProps={{ style: { fontFamily: "Open Sans" } }}
              InputLabelProps={{ style: { fontFamily: "Open Sans" } }}
              inputProps={{ minLength: 6 }}
            />
            <FormControl fullWidth>
              <InputLabel
                shrink
                htmlFor="primaryLanguage"
                className={classes.languageLabel}
              >
                Select primary language.
              </InputLabel>
              <Select
                value={values.language}
                onChange={handleChange}
                input={
                  <Input
                    className={classes.input}
                    name="language"
                    id="primaryLanguage"
                  />
                }
                name="language"
              >
                <MenuItem value={"eng"} className={classes.menuItem}>
                  <img
                    className={classes.flag}
                    src={require("../assets/united-kingdom.svg")}
                  />
                  English
                </MenuItem>
                <MenuItem value={"fr"} className={classes.menuItem}>
                  <img
                    className={classes.flag}
                    src={require("../assets/france.svg")}
                  />
                  Francais
                </MenuItem>
                <MenuItem value={"spa"} className={classes.menuItem}>
                  <img
                    className={classes.flag}
                    src={require("../assets/spain.svg")}
                  />
                  Espagnol
                </MenuItem>
              </Select>
            </FormControl>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.createButton}
            >
              Create
            </Button>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
}
