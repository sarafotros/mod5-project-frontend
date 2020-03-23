import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import HomepageIcon from '@material-ui/icons/Home';
// import NewRequestIcon from '@material-ui/icons/NoteAdd';
import AllRequestsIcon from '@material-ui/icons/FormatPaint';
import ServicesIcon from '@material-ui/icons/ViewList';
import ContactUsIcon from '@material-ui/icons/ContactMail';
import MyContractIcon from '@material-ui/icons/Work';
import MyRequsetDetailIcon from '@material-ui/icons/ShoppingBasket';
import ServiceIcon from '@material-ui/icons/Store';
import useStyles from '../styles/components/DrawerMenu';

export default function DrawerMenu () {
	const checkActive = (match, location) => {
		//some additional logic to verify you are in the home URI
		if (!location) return false;
		const { pathname } = location;
		console.log(pathname);
		return pathname === '/';
	};

	const classes = useStyles();
    if (localStorage.role === 'user') {
			return (
				<List>
					<NavLink
						to="/"
						activeClassName={classes.activeMenuItem}
						isActive={checkActive}
					>
						<ListItem button>
							<ListItemIcon>
								<HomepageIcon />
							</ListItemIcon>
							<ListItemText primary={'Home'} />
						</ListItem>
					</NavLink>
					<NavLink to="/services" activeClassName={classes.activeMenuItem}>
						<ListItem button>
							<ListItemIcon>
								<ServiceIcon />
							</ListItemIcon>
							<ListItemText primary={'All Services'} />
						</ListItem>
					</NavLink>
					<NavLink to="/bookings" activeClassName={classes.activeMenuItem}>
						<ListItem button>
							<ListItemIcon>
								<MyRequsetDetailIcon />
							</ListItemIcon>
							<ListItemText primary={'My bookings'} />
						</ListItem>
					</NavLink>
					<ListItem button>
						<ListItemIcon>
							<ContactUsIcon />
						</ListItemIcon>
						<ListItemText primary={'Contact us'} />
					</ListItem>
				</List>
			);
		} else if (localStorage.role === 'handyman') {
			return (
				<List>
					<NavLink
						to="/"
						activeClassName={classes.activeMenuItem}
						isActive={checkActive}
					>
						<ListItem button>
							<ListItemIcon>
								<HomepageIcon />
							</ListItemIcon>
							<ListItemText primary={'Home'} />
						</ListItem>
					</NavLink>
					<NavLink to="/services" activeClassName={classes.activeMenuItem}>
						<ListItem button>
							<ListItemIcon>
								<MyContractIcon />
							</ListItemIcon>
							<ListItemText primary={'All Services'} />
						</ListItem>
					</NavLink>
					<NavLink to="/bookings" activeClassName={classes.activeMenuItem}>
						<ListItem button>
							<ListItemIcon>
								<ServicesIcon />
							</ListItemIcon>
							<ListItemText primary={'All requests'} />
						</ListItem>
					</NavLink>
					<ListItem button>
						<ListItemIcon>
							<AllRequestsIcon />
						</ListItemIcon>
						<ListItemText primary={'My contracts'} />
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<ContactUsIcon />
						</ListItemIcon>
						<ListItemText primary={'Contact us'} />
					</ListItem>
				</List>
			);
    } return (
				<List>
					<NavLink
						to="/"
						activeClassName={classes.activeMenuItem}
						isActive={checkActive}
					>
						<ListItem button>
							<ListItemIcon>
								<HomepageIcon />
							</ListItemIcon>
							<ListItemText primary={'Home'} />
						</ListItem>
					</NavLink>
					<NavLink to="/services" activeClassName={classes.activeMenuItem}>
						<ListItem button>
							<ListItemIcon>
								<ServiceIcon />
							</ListItemIcon>
							<ListItemText primary={'All Services'} />
						</ListItem>
					</NavLink>
					<ListItem button>
						<ListItemIcon>
							<ContactUsIcon />
						</ListItemIcon>
						<ListItemText primary={'Contact us'} />
					</ListItem>
				</List>
			);
  
}
