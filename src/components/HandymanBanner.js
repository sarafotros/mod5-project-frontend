import React, { useState } from 'react';
import { Paper, Grid, Typography, Button } from '@material-ui/core';
import HandyManImg from '../images/banner/hadnyman_banner.jpg';
import useStyles from '../styles/components/HandymanBanner';
import HandymanSigninModal from './HandymanSigninModal';
import HandymanSignupModal from './HandymanSignupModal';

function HandymanBanner() {
  const classes = useStyles();

  const [signInModalIsOpen, setSignInModalIsOpen] = useState(false);
  const [signUpModalIsOpen, setSignUpModalIsOpen] = useState(false);

  return (
    <>
      <HandymanSigninModal
        isOpen={signInModalIsOpen}
        toggleLoginModal={() => setSignInModalIsOpen(false)}
        openSignupModal={() => setSignUpModalIsOpen(true)}
      />
      <HandymanSignupModal
        isOpen={signUpModalIsOpen}
        toggleSignupModal={() => setSignUpModalIsOpen(false)}
      />
      <Paper className={classes.paper}>
        <img src={HandyManImg} alt='handy man banner' className={classes.img} />
        <Grid container direction='column' className={classes.text}>
          <Grid item>
            <Typography variant='h2'>HandyMan</Typography>
          </Grid>
          <Grid item>
            <Typography variant='h5'>
              if you are handy man click here.
            </Typography>
          </Grid>
          <Grid item>
            <Button
              variant='contained'
              className={classes.button}
              onClick={() => setSignInModalIsOpen(true)}
              color='secondary'
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}

export default HandymanBanner;
