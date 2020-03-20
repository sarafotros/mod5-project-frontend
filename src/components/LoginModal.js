import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const LoginModal = (props) => {
  const { isOpen, toggleLoginModal } = props;
  const classes = useStyles();

  return (
    <div>
      <Modal
        className={classes.modal}
        open={isOpen}
        onClose={toggleLoginModal}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={isOpen}>
          <div className={classes.paper}>
            <h2 id='transition-modal-title'>Login</h2>
            <hr />
            <p id='transition-modal-description'>
              react-transition-group animates me.
            </p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default LoginModal;
