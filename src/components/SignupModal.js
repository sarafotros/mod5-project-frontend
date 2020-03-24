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
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import useStyles from '../styles/components/SignupModal';
import API from '../API';
import Alert from '@material-ui/lab/Alert';

function SignUpModal(props) {
  const classes = useStyles();
  const { isOpen, toggleSignupModal } = props;

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

    const [snackBarIsOpen, setSnackBarIsOpen] = useState(false);
		const [snackBarMessage, setSnackBarMessage] = useState('');
		const [snackSeverity, setSnackSeverity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const body = {
      name,
      username,
      phone,
      password,
    };

    API.signup(body).then((json) => {
      const { token, user } = json;
      if (user) {
				localStorage.token = token;
				localStorage.role = 'user';
				localStorage.user_id = user.id;
				localStorage.name = user.name;
				localStorage.username = user.username;
				setSnackBarMessage(['Signed up successfully!']);
				setSnackSeverity('success');
				setSnackBarIsOpen(true);
				setTimeout(() => {
					window.location.reload();
				}, 1000);
      } else {
        const { error } = json;
				setSnackBarMessage(error);
				setSnackSeverity('error');
				setSnackBarIsOpen(true);
			}
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
				timeout: 500
			}}
		>
      <>
          <Snackbar
							open={snackBarIsOpen}
							autoHideDuration={6000}
							onClose={() => setSnackBarIsOpen(false)}
        >
          <div className={classes.snackBarMessages}>
          {snackBarMessage && snackBarMessage.map((sm) => {
            return (<Alert
              onClose={() => setSnackBarIsOpen(false)}
              severity={snackSeverity}
            >
              {sm}
            </Alert>
            );
          })}
            </div>
          </Snackbar>
				<Fade in={isOpen}>
					<Paper className={classes.paper}>
						<form onSubmit={handleSubmit}>
							<Grid container direction="column" spacing={3}>
								<Grid item>
									<Grid container justify="center">
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
										name="name"
										label="Name"
										placeholder="Enter your full name"
										value={name}
										onChange={e => setName(e.target.value)}
									/>
								</Grid>
								<Grid item>
									<TextField
										fullWidth
										name="username"
										label="Username"
										placeholder="Choose your username"
										value={username}
										onChange={e => setUsername(e.target.value)}
									/>
								</Grid>
								<Grid item>
									<TextField
										fullWidth
										name="phone"
										label="Phone Number"
										placeholder="Enter your phone number"
										value={phone}
										onChange={e => setPhone(e.target.value)}
									/>
								</Grid>
								<Grid item>
									<TextField
										fullWidth
										name="password"
										label="Password"
										placeholder="Enter your password"
										type="password"
										value={password}
										onChange={e => setPassword(e.target.value)}
									/>
								</Grid>

								<Grid item>
									<Button fullWidth type="submit" variant="contained">
										Sign Up
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

export default SignUpModal;
