import React, { useState } from 'react';
import {
  Modal,
  Paper,
  TextField,
  Button,
  Grid,
  Fade,
  Backdrop,
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import useStyles from '../styles/components/SignupModal';
import API from '../API';

function SignUpModal(props) {
  const classes = useStyles();
  const { isOpen, toggleSignupModal } = props;

  const [name, setName] = useState('');
  const [handyname, setHandyname] = useState('');
  const [phone, setPhone] = useState('');
  const [specialty, setSpecialty] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      handyname,
      phone,
      password,
      specialty,
    };

    API.signupHandy(body).then((json) => {
      const { token, handy_man } = json;
      localStorage.token = token;
      localStorage.role = 'handyman';
      localStorage.user_id = handy_man.id;
      localStorage.name = handy_man.name;
      localStorage.handyname = handy_man.handyname;
      window.location.reload();
    });
  };

  return (
    <Modal
      open={isOpen}
      onClose={toggleSignupModal}
      className={classes.modal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <Paper className={classes.paper}>
          <form onSubmit={handleSubmit}>
            <Grid container direction='column' spacing={3}>
              <Grid item>
                <Grid container justify='center'>
                  <Grid item>
                    <div className={classes.addPersonIconContainer}>
                      <PersonAddIcon className={classes.addPersonIcon} />
                    </div>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  name='name'
                  label='Name'
                  placeholder='Enter your full name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  name='handyname'
                  label='handyname'
                  placeholder='Choose your handyname'
                  value={handyname}
                  onChange={(e) => setHandyname(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  name='specialty'
                  label='specialty'
                  placeholder='Enter your specialty'
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  name='phone'
                  label='Phone Number'
                  placeholder='Enter your phone number'
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                  Sign Up
                </Button>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Fade>
    </Modal>
  );
}

export default SignUpModal;
