import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
	state = {};

	logedIn = () => {
		return this.props.username ? (
			<Fragment>
				{' '}
				<Link onClick={this.props.logOut} to="/">
					Log Out
				</Link>{' '}
			</Fragment>
		) : (
			<Fragment>
				<Link to="/login"> Login </Link> | <Link to="/signup"> SignUp </Link>{' '}
			</Fragment>
		);
	};
	render() {
		return (
			<div>
				<Link to="/">Home</Link>
				<div>
					<a href="#" target="_blank">
						About Us
					</a>
				</div>
				<div>
					{this.logedIn()}
					<Link to="/bookings">| My Booking </Link>
					<Link to="/booking/services">| Add New Request </Link>
				</div>
			</div>
		);
	}
}

export default Header;
