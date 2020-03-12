import React, { Component } from 'react';
import API from '../API';

class Login extends Component {
    state = { 
        username: '',
        password:''
    }
    	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
    };
    
    handleSubmit = (e) => {
        e.preventDefault() 
		   API.logingFetch(this.state)
			.then(json => this.props.logIn(json.user, json.token));
      }

    render() { 
      return (
        <div>
            <h2>Login</h2>
            <div>
                  <form onSubmit={this.handleSubmit}>
                      <label>Username:</label>
                      <input type="text" name="username" onChange={this.handleChange} /> <br />
                      <label>Password</label>
                      <input type="password" name="password" onChange={this.handleChange} /> <br />
                      <button type="submit" value="Sign In">Login</button>
                </form>
            </div>
        </div>
	  );
    }
}
 
export default Login;