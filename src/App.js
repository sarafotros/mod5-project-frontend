import React from 'react';
import Welcome from './containers/Welcome';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Homepage from './containers/Homepage';
// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render() {
    console.log('4');
    return (
      <div>
        <CssBaseline />
        <Router>
          {/* <Welcome /> */}
          <Homepage />
        </Router>
      </div>
    );
  }
}

export default App;
