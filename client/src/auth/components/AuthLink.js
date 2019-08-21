// ==============================================
// AuthLink Component:
// ==============================================

// Dependencies:
import React from 'react';
import { Link } from 'react-router-dom';

// Material UI:
import Button from '@material-ui/core/Button';

// AuthLink Component:
export default function AuthLink(props) {
  return (
    <div style={ styles.container }>
      <div className="row text-center-sm">
        <div style={ styles.text } className="col-sm-6 col-xs-12">
          <p>{ props.text }</p>
        </div>
        <Link className="col-sm-6 col-xs-12" to={ props.location } style={ styles.link }>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={ styles.button }
          >
            { props.button }
          </Button>
        </Link>
      </div>
    </div>
  )
}

// Component Styles:
const styles = {
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

  text: {
    marginTop: "24px"
  },

  button: {
    background: "white",
    fontFamily: "Open Sans",
    fontWeight: "600",
    color: "#3A8DFF",
    padding: "20px 70px 20px 70px",
    marginLeft: "20px"
  }
}
