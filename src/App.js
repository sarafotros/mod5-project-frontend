import React from 'react';
import Welcome from './containers/Welcome';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import Homepage from './containers/Homepage';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';

class App extends React.Component {
  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
          <CssBaseline />
          <Router>
            {/* <Welcome /> */}
            <Homepage />
          </Router>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
