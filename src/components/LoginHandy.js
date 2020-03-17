import React from 'react';
import API from '../API';


class LoginHandy extends React.Component {
	state = {
		handyname: '',
		password: '',
		userIsInvalid: false,
		invalidMessage: ''
	};

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};
	
	handleSubmit = (e) => {
		e.preventDefault();
		const { handyname, password } = this.state
		const loginData = { handyname, password }
		API.logingHandyFetch(loginData).then(json => {
			if (json.errorCode === 1001) {
				this.setState({
					userIsInvalid: true,
					invalidMessage: json.message
				});
			}
			this.props.logInHandy(json.handy_man, json.token);
		});
	 };
	
	render() {
		const { userIsInvalid, invalidMessage} = this.state
		return (
			<div>
				<h2>HandyMan Login</h2>
				<div>
					<form onSubmit={this.handleSubmit}>
						<label>Username:</label>
						<input
							type="text"
							name="handyname"
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
						<button type="submit">
							Login
						</button>
					</form>
					
				</div>

				{userIsInvalid && <p style={{ color: 'red' }}>{invalidMessage}</p>}

			</div>
		);
	}
}
 
export default LoginHandy;