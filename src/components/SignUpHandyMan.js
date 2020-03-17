import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../API';

// import LoginHandy from '../components/LoginHandy';


class SignUpHandyMan extends Component {
	state = {
		name: '',
		handyname: '',
		phone: 0,
		specialty: 'specialty',
		password: ''
	}
    
    handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
    };
	 
	handleSubmit = (e) => {
		e.preventDefault();
		API.signupHandy(this.state).then(json => {
			this.props.logInHandy(json.handy_man, json.token);
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
					<label>Handyname:</label>
					<input
						type="text"
						name="handyname"
						onChange={this.handleChange}
					/>
					 <br />
					 <label>Your Specialty</label>
					 <input type="text" name="specialty" onChange={this.handleChange} />
					 <br />
					<label>Phone Number</label>
					<input type="text" name="phone" onChange={this.handleChange} />
					<br />
					<label>Choose a Password</label>
					<input
						type="password"
						name="password"
						onChange={this.handleChange}
					/>
					<br />
					<input type="submit" value="Sign up" />
				</form>
			</div>
			<span>Already have a HandApp Account?</span>
			<Link to="/login-handyman">
			<button>SIGN IN</button>
			{/* <LoginHandy/> */}
			</Link>
		</div>
	);
}
}
 
export default SignUpHandyMan;