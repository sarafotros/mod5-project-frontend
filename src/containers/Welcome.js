import React from 'react';
import API from '../API'
import { Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Login from '../components/Login';
import SignUp from '../components/SignUp';
import MainComp from './MainComp';
import Upload from '../components/Upload'


class Welcome extends React.Component {
	state = {
		users: [],
		username: null,
		user: null
	};

	logIn = (user, token) => {
		if (user) {
			this.setState({
				username: user.username,
				user: user
			})
			localStorage.token = token;
		}
    };
    

	logOut = () => {
		this.setState({
			username: null
		});
		localStorage.removeItem('token')
	};

	getUsers = () => {
		API.getUsers().then(users => this.setState({ users }))
	};

	componentDidMount() {
		if (localStorage.token) {
			API.validate(localStorage.token).then(json =>
				this.logIn(json.user, json.token)
			)
		}
		this.getUsers();
	}

	render() {
	  return (
          <div>
              <h1>{this.state.username}</h1>
              <Header username={this.state.username} logOut={this.logOut} /> 
              {this.state.username && <Redirect to='/' />}
              <Route exact path="/" component={() => <MainComp />} />
              <Route exact path="/login" component={() => <Login logIn={this.logIn} />} />
              <Route exact path="/signup" component={() => <SignUp logIn={this.logIn} />} />
			  <Route exact path="/upload" component={() => <Upload />}/>
              {/* <Footer /> */}
		</div>
		);
	}
}
 
export default Welcome;