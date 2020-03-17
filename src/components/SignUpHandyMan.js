import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import LoginHandy from '../components/LoginHandy';


class SignUpHandyMan extends Component {
    state = {}
    
    handleChange = () => {
	
    };
     handleChange = () => {
	
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
									name="username"
									onChange={this.handleChange}
								/>
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