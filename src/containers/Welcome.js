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
import SignUpHandyMan from '../components/SignUpHandyMan';
import LoginHandy from '../components/LoginHandy';
import Footer from '../containers/Footer';

class Welcome extends React.Component {
	state = {
		user: null,
		users: [],
		username: null,

		handymen: [],
		handyname: null,
		handyman: null,

		services: []
	};

	logIn = (user, token) => {
		console.log("login")

		if (user && !this.state.username) {
			this.setState({
				username: user.username,
				user: user
			});
			localStorage.token = token;
			localStorage.role = 'user';
			localStorage.user_id = user.id;
			window.location.reload();
		}
	};

	logOut = () => {
		this.setState({
			username: null,
			handyname: null,
		});
		localStorage.removeItem('token')
		localStorage.removeItem('role');
		window.location.reload()
	};

	getUsers = () => {
		console.log("getusers")

		API.getUsers().then(users => this.setState({ users }));
	};

	//services
	getServices = () => {
		console.log("getservices")

		API.getServices().then(services => this.setState({ services }));
	};

	// handy man
	logInHandy = (handyman, token) => {
		if (handyman) {
			this.setState({
				handyname: handyman.handyname,
				handyman: handyman
			});
			localStorage.token = token;
			localStorage.role = 'handy_man';
			localStorage.handyman_id = handyman.id;
			window.location.reload();
		}
	};

	// logOutHandy = () => {
	// 	this.setState({
	// 		handyname: null
	// 	});
	// 	localStorage.removeItem('token');
	// };

	getHandymen = () => {
		API.getHandyman().then(handymen => this.setState({ handymen }));
	};


	componentDidMount() {
		// if (localStorage.token) {
		// 	API.validate(localStorage.token).then(json =>
		// 		this.logIn(json.user, json.token)
		// 	);
		// }
		this.getUsers();
		this.getServices();
	}

	render() {
		console.log("2")
		return (
			//   const { services} = this.state
			<div>
				<h1>{this.state.username}</h1>
				<Header username={this.state.username} handyname={this.state.handyname} logOut={this.logOut} />
				{(this.state.username || this.state.handyname ) && <Redirect to="/" />}
				<Route exact path="/"  ><MainComp /></Route>
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
					component={() => <RequestDetails logIn={this.logIn}/>}
				/>
				<Route exact path="/bookings" component={() => <Bookings logIn={this.logIn}/>} />
				<Route exact path="/signup-handy" component={() => <SignUpHandyMan logInHandy={this.logInHandy}/>} />
				<Route exact path="/login-handyman" component={() => <LoginHandy logInHandy={this.logInHandy}/>} />
						
				<span>Click 👇🏻 if you are a HandyMan 👷🏽‍♂️</span>
				<Footer />
			</div>
		);
	}
}
 
export default Welcome;