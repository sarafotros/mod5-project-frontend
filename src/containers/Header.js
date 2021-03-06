import React from 'react';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';


class Header extends React.Component {
	state = {};

	logedIn = () => {
		return localStorage.token ? (
				<Link onClick={this.props.logOut} to="/">
					Log Out
				</Link>
		) : (
			<Fragment>
				<Link to="/login"> Login </Link> | <Link to="/signup"> SignUp </Link>
			</Fragment>
		);
	};
	render() {
		return (
			<div>
				<Link to="/">Home</Link>
				<div>
					<p>
						About Us
					</p>
				</div>
					
				<div>
					{this.logedIn()}
					{(localStorage.token) && <Link to="/bookings">|{localStorage.role ==='user' ? "My Booking" : "ALL REQUESTS"} </Link>}
					{localStorage.role === 'user'  && <Link to="/booking/services">| Add New Request </Link>}
				</div>
			</div>
		);
	}
}

export default Header;
