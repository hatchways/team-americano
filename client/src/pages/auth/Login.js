// ==============================================
// Login Page:
// ==============================================

// Dependencies:
import React from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

// Material UI:
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Hidden from '@material-ui/core/Hidden';

// Assets:
import Image from '../../assets/bg-img.png';

// Login Component
export default class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: "",
      errorMessage: ""
    };

    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange = event => {
    const target = event.target;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  }

  _onLogin = async e => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3001/api/auth/login", {
        email: this.state.email,
        password: this.state.password
      });

      if (response.status === 200) {
        this.props.history.push("/");
      } else {
        throw new Error();
      }
    } catch (e) {
      this.setState({
        errorMessage: "Error"
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
            <div style={ styles.login }>
              <div>
                <p>Don't have an account?</p>
              </div>
              <Link to="/register" style={ styles.link }>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={ styles.createButton }
                >
                  Create
                </Button>
              </Link>
            </div>
            <Grid container>
              <form style={ styles.form }>
                <h1 style={{ textAlign: "left" }}>Welcome back!</h1>
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
                  onChange={this._handleChange}
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
                  values={this.state.password}
                  onChange={this._handleChange}
                />
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  style={ styles.loginButton }
                  onClick={this._onLogin}
                >
                  Login
                </Button>
              </form>
            </Grid>
          </div>
        </Grid>
        {this.state.errorMessage.length > 0 && (
        <div style={ styles.errorStyle }>
          <p>Incorrect email or password</p>
        </div>
      )}
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
    margin: "0 auto"
  },

  link: {
    textDecoration: "none"
  },

  login: {
    marginTop: "20px",
    display: "flex",
    direction: "row",
    justify: "space-around",
    alignItems: "center",
    float: "right"
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

  form: {
    width: "50%",
    margin: "0 auto",
    textAlign: "center",
    padding: "45px 0"
  },

  errorStyle: {
    position: "absolute",
    backgroundColor: "black",
    color: "white",
    marginLeft: "60%",
    width: "200px",
    textAlign: "center",
    bottom: "100px"
  }
}
