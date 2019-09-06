// ==============================================
// Register Page:
// ==============================================

// Dependencies:
import React from "react";

// Services:
import { authenticationService } from "../services";

// Material UI:
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";

// Components:
import Motto from "./components/Motto";
import AuthLink from "./components/AuthLink";

// Register Component:
export default class Register extends React.Component {
  componentDidMount = async () => {
    // Set Document Title:
    document.title = "Register - Start Conversing With Friends Today!";
    console.log(this.props.isReferral);
  };

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      language: "eng",
      errorMessage: false
    };

    this._handleChange = this._handleChange.bind(this);
    this._onRegister = this._onRegister.bind(this);
  }

  // Event Listener to Update State:
  _handleChange = event => {
    const target = event.target;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  };

  // Event Listener to Create User:
  _onRegister = async e => {
    e.preventDefault();

    try {
      const status = await authenticationService.register(
        this.state.email,
        this.state.name,
        this.state.password,
        this.state.language
      );
      if (status) {
        // Add query parameter to homepage if user comes from referral link
        let path = "";
        if (this.props.isReferral) {
          path += "?isreferral=true";
          this.props.history.push({
            pathname: "/",
            search: path,
            state: { isReferral: "true" }
          });
        } else {
          this.props.history.push("/");
        }
      }
    } catch (e) {
      this.setState({
        errorMessage: true
      });
    }
  };

  render() {
    return (
      <Grid container style={styles.root}>
        <CssBaseline />
        <Motto />
        <Grid item xs={12} elevation={6} sm={8} square>
          <AuthLink
            text="Already have an account?"
            button="Login"
            location="/login"
          />
          <Grid container>
            <form style={styles.form} action="localhost:3001" method="post">
              <h1 style={{ textAlign: "left" }}>Create an account.</h1>
              <TextField
                type="email"
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                InputLabelProps={{ style: { fontFamily: "Open Sans" } }}
                InputProps={{ style: { fontFamily: "Open Sans" } }}
                values={this.state.email}
                onChange={this._handleChange}
              />
              <TextField
                type="password"
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="password"
                label="Password"
                helperText="At least 6 characters."
                name="password"
                autoComplete="password"
                FormHelperTextProps={{ style: { fontFamily: "Open Sans" } }}
                InputLabelProps={{ style: { fontFamily: "Open Sans" } }}
                inputProps={{ minLength: 6 }}
                values={this.state.password}
                onChange={this._handleChange}
              />
              <TextField
                type="name"
                variant="standard"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Your name"
                name="name"
                autoComplete="name"
                autoFocus
                InputLabelProps={{ style: { fontFamily: "Open Sans" } }}
                InputProps={{ style: { fontFamily: "Open Sans" } }}
                values={this.state.name}
                onChange={this._handleChange}
              />
              <FormControl fullWidth>
                <InputLabel
                  shrink
                  htmlFor="primaryLanguage"
                  style={styles.languageLabel}
                >
                  Select primary language.
                </InputLabel>
                <Select
                  value={this.state.language}
                  input={
                    <Input
                      style={styles.input}
                      name="language"
                      id="primaryLanguage"
                      onChange={this._handleChange}
                    />
                  }
                  name="language"
                >
                  <MenuItem value={"eng"} style={styles.menuItem}>
                    <img
                      style={styles.flag}
                      src={require("../assets/united-kingdom.svg")}
                      alt="english"
                    />
                    English
                  </MenuItem>
                  <MenuItem value={"fr"} style={styles.menuItem}>
                    <img
                      style={styles.flag}
                      src={require("../assets/france.svg")}
                      alt="france"
                    />
                    Francais
                  </MenuItem>
                  <MenuItem value={"spa"} className={styles.menuItem}>
                    <img
                      style={styles.flag}
                      src={require("../assets/spain.svg")}
                      alt="spain"
                    />
                    Espagnol
                  </MenuItem>
                </Select>
              </FormControl>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={styles.createButton}
                onClick={this._onRegister}
              >
                Create
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

// Component Styling:
const styles = {
  root: {
    height: "100vh",
    fontFamily: "Open Sans"
  },

  form: {
    width: "55%",
    margin: "0 auto",
    textAlign: "center",
    padding: "50px 0"
  },

  errorStyle: {
    position: "absolute",
    backgroundColor: "black",
    color: "white",
    marginLeft: "60%",
    width: "200px",
    textAlign: "center",
    bottom: "100px"
  },

  createButton: {
    backgroundColor: "#3A8DFF",
    fontFamily: "Open Sans",
    fontWeight: "600",
    padding: "20px 70px 20px 70px",
    marginTop: "50px"
  },

  flag: {
    width: "5%",
    float: "left"
  }
};
