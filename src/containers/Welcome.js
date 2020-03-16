import React from 'react';
import API from '../API'
import { Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import MainComp from './MainComp';
// import Upload from '../components/Upload'
import AddNewRequest from '../components/AddNewRequest';
import Services from '../containers/Services';
import RequestDetails from '../components/requestDetails';
import Bookings from './Bookings';


class Welcome extends React.Component {
	state = {
		users: [],
		username: null,
		handymen: [],
		handyname: null,
		handyman: null,
		user: null,
		services: []
	};

	logIn = (user, token) => {
		if (user) {
			this.setState({
				username: user.username,
				user: user
			});
			localStorage.token = token;
			localStorage.user_id = user.id;
		}
	};

	logOut = () => {
		this.setState({
			username: null
		});
		localStorage.removeItem('token');
	};

	getUsers = () => {
		API.getUsers().then(users => this.setState({ users }));
	};

	//services
	getServices = () => {
		API.getServices().then(services => this.setState({ services }));
	};

	//// handy man
	logInHandy = (handyman, token) => {
		if (handyman) {
			this.setState({
				handyname: handyman.handyname,
				handyman: handyman
			});
			localStorage.token = token;
			localStorage.handyman_id = handyman.id;
		}
	};

	logOutHandy = () => {
		this.setState({
			handyname: null
		});
		localStorage.removeItem('token');
	};

	getHandymen = () => {
		API.getHandyman().then(handymen => this.setState({ handymen }));
	};

	componentDidMount() {
		if (localStorage.token) {
			API.validate(localStorage.token).then(json =>
				this.logIn(json.user, json.token)
			);
		}
		this.getUsers();
		this.getServices();
	}

	render() {
		return (
			//   const { services} = this.state
			<div>
				<h1>{this.state.username}</h1>
				<Header username={this.state.username} logOut={this.logOut} />
				{this.state.username && <Redirect to="/" />}
				<Route exact path="/" component={() => <MainComp />} />
				<Route
					exact
					path="/login"
					component={() => <Login logIn={this.logIn} />}
				/>
				<Route
					exact
					path="/signup"
					component={() => <SignUp logIn={this.logIn} />}
				/>
				{/* <Route exact path="/upload" component={() => <Upload />}/> */}
				<Route
					exact
					path="/booking/services"
					component={() => <Services services={this.state.services} />}
				/>
				<Route
					exact
					path="/booking/services/:id"
					component={() => <AddNewRequest />}
				/>
				<Route
					exact
					path="/bookings/:id"
					component={() => <RequestDetails />}
				/>
				<Route exact path="/bookings" component={() => <Bookings />} />

				{/* <Footer /> */}
			</div>
		);
	}
}
 
export default Welcome;