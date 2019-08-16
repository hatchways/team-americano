import React from "react";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import CssBaseline from "@material-ui/core/CssBaseline";
import Image from "../assets/bg-img.png";

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
  link: {
    textDecoration: "none"
  },
  createButton: {
    background: "white",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: "#3A8DFF",
    padding: "20px 70px 20px 70px",
    marginLeft: "20px"
  },
  loginButton: {
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
  }
}));

export default function Login(props) {
  const classes = useStyles();

  const [values, setValues] = React.useState({
    email: "",
    password: "",
    name: "",
    language: "eng",
    errorMessage: ""
  });

  const handleChange = event => {
    event.persist();
    setValues(state => ({
      ...state,
      [event.target.name]: event.target.value
    }));
  };

  function onLogin(e) {
    e.preventDefault();
    console.log(values);
    const url = "http://localhost:3001/api/auth/login";
    fetch(url, {
      method: "POST",
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(values)
    })
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          props.history.push("/home");
        } else {
          setValues(state => ({
            ...state,
            errorMessage: "Error"
          }));
        }
        console.log(values.errorMessage);
        response.text();
      })
      .then(contents => {
        console.log(contents);
      })
      .catch(() =>
        console.log("Can’t access " + url + " response. Blocked by browser?")
      );
  }

  let errorStyle = {
    position: "absolute",
    backgroundColor: "black",
    color: "white",
    marginLeft: "60%",
    width: "200px",
    textAlign: "center",
    bottom: "100px"
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
            <p>Don't have an account?</p>
          </div>
          <Link to="/register" className={classes.link}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.createButton}
            >
              Create
            </Button>
          </Link>
        </div>
        <Grid container>
          <form className={classes.form}>
            <h1>Welcome back!</h1>
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
              values={values.email}
              onChange={handleChange}
            />
            <TextField
              type="password"
              variant="standard"
              margin="normal"
              required="true"
              fullWidth
              id="password"
              label="Password"
              name="password"
              autoComplete="password"
              FormHelperTextProps={{ style: { fontFamily: "Open Sans" } }}
              InputLabelProps={{ style: { fontFamily: "Open Sans" } }}
              inputProps={{ minLength: 6 }}
              values={values.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.loginButton}
              onClick={onLogin}
            >
              Login
            </Button>
          </form>
        </Grid>
      </Grid>
      {values.errorMessage.length > 0 && (
        <div style={errorStyle}>
          <p>Incorrect email or password</p>
        </div>
      )}
    </Grid>
  );
}
