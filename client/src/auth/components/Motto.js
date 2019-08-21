// ==============================================
// Motto Component:
// ==============================================

// Dependencies:
import React from 'react';

// Material UI:
import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';

// Assets:
import Image from '../../assets/bg-img.png';

// Motto Component:
export default function Motto(props) {
  return (
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
  );
}

// Component Styling:
const styles = {
  image: {
    backgroundImage: `linear-gradient(to bottom, rgba(58, 141, 255, 0.85), rgba(134, 185, 255, 0)), url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover"
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
}
