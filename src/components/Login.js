import React, { Component } from 'react';
import API from '../API';

class Login extends Component {
	state = {
		username: '',
		password: '',
		userIsInvalid: false,
		invalidMessage: ''
	};

	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	handleSubmit = e => {
		e.preventDefault();
		const { username, password } = this.state
		const loginData = { username, password }
		
		API.logingFetch(loginData).then(json => {
			console.log(json)
			if (json.errorCode === 1001) {
				this.setState({
					userIsInvalid: true,
					invalidMessage: json.message
				});
			}
			this.props.logIn(json.user, json.token);
		});
	};

	render() {
		const { userIsInvalid, invalidMessage } = this.state;
		
		return (
			<div>
				<h2>Login</h2>
				<div>
					<form onSubmit={this.handleSubmit}>
						<label>Username:</label>
						<input
							type="text"
							name="username"
							onChange={this.handleChange}
							required
						/>{' '}
						<br />
						<label>Password</label>
						<input
							type="password"
							name="password"
							onChange={this.handleChange}
							required
						/>{' '}
						<br />
						<button type="submit" value="Sign In">
							Login
						</button>
						{userIsInvalid && <p style={{ color: 'red' }}>{invalidMessage}</p>} 
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
