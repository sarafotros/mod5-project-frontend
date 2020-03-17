import React from 'react';
import Welcome from './containers/Welcome';
import { BrowserRouter as Router } from 'react-router-dom'
import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {

  render() {
	  console.log("4")
	  return (
			<div>
				<Router>
					<Welcome />
				</Router>
			</div>
		);
  }
}

export default App;


