import React from 'react';
import clsx from 'clsx';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DrawerMenu from '../components/DrawerMenu';
import BigBanner from '../components/BigBanner';
import HandymanBanner from '../components/HandymanBanner';
import Appbar from '../components/Appbar';
import useStyles from '../styles/containers/Homepage';

const HomePage = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Appbar
        classes={classes}
        open={open}
        handleDrawerOpen={handleDrawerOpen}
      />
      <Drawer
        variant='permanent'
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <DrawerMenu />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <BigBanner />
        <div style={{ height: 200 }}></div>
        <HandymanBanner />
      </main>
    </div>
  );
};

export default HomePage;
