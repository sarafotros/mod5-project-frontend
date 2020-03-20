import React, { Component } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, IconButton } from '@material-ui/core';
import LoginModal from './LoginModal';

export default class Appbar extends Component {
  state = {
    loginModalIsOpen: false,
  };

  toggleLoginModal = () => {
    this.setState({
      loginModalIsOpen: !this.state.loginModalIsOpen,
    });
  };
  render() {
    const { classes, open, handleDrawerOpen } = this.props;
    const { loginModalIsOpen } = this.state;
    return (
      <>
        <LoginModal
          isOpen={loginModalIsOpen}
          toggleLoginModal={this.toggleLoginModal}
        />
        <AppBar
          position='fixed'
          className={clsx(classes.appBar, {
            [classes.appBarShift]: open,
          })}
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
                  <Grid item onClick={this.toggleLoginModal}>
                    Login
                  </Grid>
                  <Grid item>&nbsp;|&nbsp;</Grid>
                  {/* &emsp; */}
                  <Grid item>Sign up</Grid>
                </Grid>
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
      </>
    );
  }
}
