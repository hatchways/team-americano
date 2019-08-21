// ==============================================
// Register Page:
// ==============================================

// Dependencies:
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// Material UI:
import Grid from "@material-ui/core/Grid";
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

// Assets:
import Image from '../../assets/bg-img.png';

// Register Component:
export default class Register extends React.Component {

  componentDidMount() {
    // Set Document Title:
    document.title = "Register - Start Conversing With Friends Today!";
  }

  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      password: "",
      language: "eng",
      errorMessage: false
    }

    this._handleChange = this._handleChange.bind(this);
    this._onRegister = this._onRegister.bind(this);
  }

  _handleChange = event => {
    const target = event.target;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  }

  _onRegister = async e => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/api/auth/register", {
        email: this.state.email,
        name: this.state.name,
        password: this.state.password,
        language: this.state.language
      });

      if (response.status === 201) {
        // Set Token:
        const { token } = response.data;
        localStorage.setItem("token", token);

        this.props.history.push("/");
      } else {
        throw new Error();
      }
    } catch(e) {
      this.setState({
        errorMessage: true
      });
    }
  }

  render() {
    return (
      <Grid container style={ styles.root }>
        <CssBaseline />
        <Grid item xs={false} sm={4} style={ styles.image }>
          <Hidden xsDown>
            <div style={ styles.motto }>
              <div style={ styles.speechIcon }>
                <i class="far fa-comment-dots fa-5x" />
              </div>
              <p>Converse with anyone with any language.</p>
            </div>
          </Hidden>
        </Grid>
        <Grid item xs={12} elevation={6} sm={8} square>
          <div style={ styles.container }>
            <div className="row text-center-sm">
              <div style={ styles.loginText } className="col-sm-6 col-xs-12">
                <p>Already have an account?</p>
              </div>
              <Link className="col-sm-6 col-xs-12" to="/login" style={ styles.link }>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={ styles.loginButton }
                >
                  Login
                </Button>
              </Link>
            </div>
          </div>
          <Grid container>
            <form style={ styles.form } action="localhost:3001" method="post">
              <h1 style={{ textAlign: "left" }}>Create an account.</h1>
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
                values={ this.state.email }
                onChange={ this._handleChange }
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
                values={ this.state.password }
                onChange={ this._handleChange }
              />
              <TextField
                type="name"
                variant="standard"
                margin="normal"
                required="true"
                fullWidth
                id="name"
                label="Your name"
                name="name"
                autoComplete="name"
                autoFocus
                InputLabelProps={{ style: { fontFamily: "Open Sans" } }}
                InputProps={{ style: { fontFamily: "Open Sans" } }}
                values={ this.state.name }
                onChange={this._handleChange}
              />
              <FormControl fullWidth>
                <InputLabel
                  shrink
                  htmlFor="primaryLanguage"
                  style={ styles.languageLabel }
                >
                  Select primary language.
                </InputLabel>
                <Select
                  value={ this.state.language }
                  input={
                    <Input
                      style={ styles.input }
                      name="language"
                      id="primaryLanguage"
                      onChange={this._handleChange}
                    />
                  }
                  name="language"
                >
                  <MenuItem value={"eng"} style={ styles.menuItem }>
                    <img
                      style={ styles.flag }
                      src={require("../../assets/united-kingdom.svg")}
                      alt="english"
                    />
                    English
                  </MenuItem>
                  <MenuItem value={"fr"} style={ styles.menuItem }>
                    <img
                      style={ styles.flag}
                      src={require("../../assets/france.svg")}
                      alt="france"
                    />
                    Francais
                  </MenuItem>
                  <MenuItem value={"spa"} className={ styles.menuItem }>
                    <img
                      className={ styles.flag }
                      src={require("../../assets/spain.svg")}
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
                style={ styles.createButton }
                onClick={this._onRegister}
              >
                Create
              </Button>
            </form>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

// Component Styling:
const styles = {
  root: {
    height: "100vh",
    fontFamily: "Open Sans"
  },

  image: {
    backgroundImage: `linear-gradient(to bottom, rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0)), url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "95%",
    margin: "0 auto",
    paddingTop: "20px"
  },

  link: {
    textDecoration: "none"
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

  loginText: {
    marginTop: "24px"
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

  flag: {
    width: "5%",
    float: "left"
  }
}
