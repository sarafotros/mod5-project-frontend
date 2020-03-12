import React, {Component} from 'react';
import API from '../API';

class SignUp extends Component {
	state = {
		name: '',
		username: '',
		phone: 0,
		password: ''
	};
	handleChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		API.signup(this.state).then(json => {
			this.props.logIn(json.user, json.token);
		});
	};

	render() {
		return (
			<div>
				<h2>Sign Up</h2>
				<div>
					<form onSubmit={this.handleSubmit}>
						<label>Name:</label>
						<input type="text" name="name" onChange={this.handleChange} />
						<br />
						<label>Username:</label>
						<input type="text" name="username" onChange={this.handleChange} />
						<br />
						<label>Phone Number</label>
						<input type="text" name="phone" onChange={this.handleChange} />
						<br />
						<label>Password</label>
						<input type="password"name="password" onChange={this.handleChange}/>
						<br />
						<input type="submit" value="Sign up"/>
					</form>
				</div>
			</div>
		);
	}
}
 
export default SignUp;