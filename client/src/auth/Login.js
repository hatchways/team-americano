// ==============================================
// Login Page:
// ==============================================

// Dependencies:
import React from "react";
import api from '../api';
import { Redirect } from "react-router-dom";

// Material UI:
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

// Components:
import Motto from './components/Motto';
import AuthLink from './components/AuthLink';

// Login Component
export default class Login extends React.Component {

  componentDidMount = async () => {
    // Set Document Title:
    document.title = "Login - Start Conversing With Friends Today!";

    // Try to make an api request to the server:
    if (await this.getAuth()) {
      this.setState({
        redirect: true
      });
    }
  }

  constructor(props) {
    super(props);

    this.state = {
      password: "",
      email: "",
      errorMessage: false,
      redirect: false
    };

    this._handleChange = this._handleChange.bind(this);
    this._onLogin = this._onLogin.bind(this);
  }

  getAuth = async () => {
    try {
      await api.get("/api/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });

      return true;
    } catch(e) {
      return false;
    }
  }

  // Event Listener to change state on input:
  _handleChange = event => {
    const target = event.target;
    const { name, value } = target;

    this.setState({
      [name]: value
    });
  }

  // Event Listener to log in user:
  _onLogin = async e => {
    e.preventDefault();
    try {
      const response = await api.post("/api/auth/login", {
        email: this.state.email,
        password: this.state.password
      });

      if (response.status === 200) {
        // Set Token:
        const { token } = response.data;
        localStorage.setItem("token", token);

        this.props.history.push("/");
      } else {
        throw new Error();
      }
    } catch (e) {
      this.setState({
        errorMessage: true
      });
    }
  }

  render() {
    if (this.state.redirect) return <Redirect to="/" />
    return (
      <Grid container style={ styles.root }>
        <CssBaseline />
        <Motto />
        <Grid item xs={12} elevation={6} sm={8} square>
          <AuthLink text="Don't have an account?" button="Create" location="/register" />
          <Grid container>
            <form style={ styles.form }>
              <h1 className="text-center-sm" style={{ textAlign: "left" }}>Welcome back!</h1>
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
        </Grid>
        {this.state.errorMessage && (
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

  signupText: {
    marginTop: "24px"
  }
}
