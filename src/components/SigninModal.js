import React, { useState } from 'react';
import {
  Modal,
  Paper,
  TextField,
  Button,
  Grid,
  Fade,
  Backdrop,
  Snackbar,
} from '@material-ui/core';
import Alert from './Alert';
import PersonIcon from '@material-ui/icons/Person';
import useStyles from '../styles/components/SignupModal';
import API from '../API';

function SignInModal(props) {
  const classes = useStyles();
  const { isOpen, toggleLoginModal } = props;

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [snackBarIsOpen, setSnackBarIsOpen] = useState(false);
  const [snackBarMessage, setSnackBarMessage] = useState('');
  const [snackSeverity, setSnackSeverity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      username,
      password,
    };

    API.logingFetch(body).then((json) => {
      const { token, user } = json;
      if (user) {
        localStorage.token = token;
        localStorage.role = 'user';
        localStorage.user_id = user.id;
        localStorage.name = user.name;
        localStorage.username = user.username;
        setSnackBarMessage('Successfully logged in.');
        setSnackSeverity('success');
        setSnackBarIsOpen(true);
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        const { message } = json;
        setSnackBarMessage(message);
        setSnackSeverity('error');
        setSnackBarIsOpen(true);
      }
    });
  };

  return (
    <Modal
      open={isOpen}
      onClose={toggleLoginModal}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <>
        <Snackbar
          open={snackBarIsOpen}
          autoHideDuration={6000}
          onClose={() => setSnackBarIsOpen(false)}
        >
          <Alert
            onClose={() => setSnackBarIsOpen(false)}
            severity={snackSeverity}
          >
            {snackBarMessage}
          </Alert>
        </Snackbar>
        <Fade in={isOpen}>
          <Paper className={classes.paper}>
            <form onSubmit={handleSubmit}>
              <Grid container direction='column' spacing={3}>
                <Grid item>
                  <Grid container justify='center'>
                    <Grid item>
                      <div className={classes.addPersonIconContainer}>
                        <PersonIcon className={classes.addPersonIcon} />
                      </div>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    name='username'
                    label='Username'
                    placeholder='Choose your username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    name='password'
                    label='Password'
                    placeholder='Enter your password'
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item>
                  <Button fullWidth type='submit' variant='contained'>
                    Sign In
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </Fade>
      </>
    </Modal>
  );
}

export default SignInModal;
