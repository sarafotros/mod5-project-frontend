import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText} from '@material-ui/core';
import HomepageIcon from '@material-ui/icons/Home';
import NewRequestIcon from '@material-ui/icons/NoteAdd';
import AllRequestsIcon from '@material-ui/icons/FormatPaint';
import ServicesIcon from '@material-ui/icons/ViewList';
import ContactUsIcon from '@material-ui/icons/ContactMail';
import MyContractIcon from '@material-ui/icons/Work';
import MyRequsetDetailIcon from '@material-ui/icons/ShoppingBasket';
import ServiceIcon from '@material-ui/icons/Store';

export default class DrawerMenu extends Component {
  render() {
    if (localStorage.role === 'user') {
			return (
				<List>
					<Link to="/">
						<ListItem button>
							<ListItemIcon>
								<HomepageIcon />
							</ListItemIcon>
							<ListItemText primary={'Home'} />
						</ListItem>
					</Link>
					<Link to="/services">
						<ListItem button>
							<ListItemIcon>
								<ServiceIcon />
							</ListItemIcon>
							<ListItemText primary={'All Services'} />
						</ListItem>
					</Link>
					{/* <Link to="/services/:id">
						<ListItem button>
							<ListItemIcon>
								<NewRequestIcon />
							</ListItemIcon>
							<ListItemText primary={'New request'} />
						</ListItem>
					</Link> */}
					<Link to="/bookings">
						<ListItem button>
							<ListItemIcon>
								<MyRequsetDetailIcon />
							</ListItemIcon>
							<ListItemText primary={'My bookings'} />
						</ListItem>
					</Link>
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
					<Link to="/">
						<ListItem button>
							<ListItemIcon>
								<HomepageIcon />
							</ListItemIcon>
							<ListItemText primary={'Home'} />
						</ListItem>
					</Link>
					<Link to="/services">
						<ListItem button>
							<ListItemIcon>
								<MyContractIcon />
							</ListItemIcon>
							<ListItemText primary={'All Services'} />
						</ListItem>
					</Link>
					<Link to="/bookings">
						<ListItem button>
							<ListItemIcon>
								<ServicesIcon />
							</ListItemIcon>
							<ListItemText primary={'All requests'} />
						</ListItem>
					</Link>
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
					<Link to="/">
						<ListItem button>
							<ListItemIcon>
								<HomepageIcon />
							</ListItemIcon>
							<ListItemText primary={'Home'} />
						</ListItem>
					</Link>
					<Link to="/services">
						<ListItem button>
							<ListItemIcon>
								<ServiceIcon />
							</ListItemIcon>
							<ListItemText primary={'All Services'} />
						</ListItem>
					</Link>
					<ListItem button>
						<ListItemIcon>
							<ContactUsIcon />
						</ListItemIcon>
						<ListItemText primary={'Contact us'} />
					</ListItem>
				</List>
			);
  }
}
