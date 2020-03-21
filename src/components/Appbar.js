import React, { Component } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, IconButton } from '@material-ui/core';
import SigninModal from './SigninModal';
import SignUpModal from './SignupModal';

export default class Appbar extends Component {
  state = {
    loginModalIsOpen: false,
    signupModalIsOpen: false,
  };

  toggleLoginModal = () => {
    this.setState({
      loginModalIsOpen: !this.state.loginModalIsOpen,
    });
  };

  toggleSignupModal = () => {
    this.setState({
      signupModalIsOpen: !this.state.signupModalIsOpen,
    });
  };

  logOutClicked = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    window.location.reload();
  };

  render() {
    const { classes, open, handleDrawerOpen } = this.props;
    const { loginModalIsOpen, signupModalIsOpen } = this.state;
    return (
      <>
        <SigninModal
          isOpen={loginModalIsOpen}
          toggleLoginModal={this.toggleLoginModal}
        />
        <SignUpModal
          isOpen={signupModalIsOpen}
          toggleSignupModal={this.toggleSignupModal}
        />
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
          color='primary'
        >
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              className={clsx(classes.menuButton, {
                [classes.hide]: open,
              })}
            >
              <MenuIcon />
            </IconButton>
            <Grid container justify='space-between' alignItems='center'>
              <Grid item>
                <Typography variant='h6' noWrap>
                  Handy App
                </Typography>
              </Grid>
              <Grid item>
                <Grid container justify='space-between'>
                  {localStorage.token ? (
                    <Grid item onClick={this.logOutClicked}>
                      Logout
                    </Grid>
                  ) : (
                    <>
                      <Grid item onClick={this.toggleLoginModal}>
                        Login
                      </Grid>
                      <Grid item>&nbsp;|&nbsp;</Grid>
                      {/* &emsp; */}
                      <Grid item onClick={this.toggleSignupModal}>
                        Sign up
                      </Grid>
                    </>
                  )}
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
