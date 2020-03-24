import React from 'react';
import MainRouter from './MainRouter'
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DrawerMenu from '../components/DrawerMenu';
import Appbar from '../components/Appbar';
import useStyles from '../styles/containers/Homepage';

const MainPanel = () => {
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
				variant="permanent"
				className={[
					classes.drawer,
					open ? classes.drawerOpen : classes.drawerClose
				].join(' ')}
				classes={{
					paper: open ? classes.drawerOpen : classes.drawerClose
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
				<MainRouter/>
			</main>
		</div>
	);
};

export default MainPanel;
