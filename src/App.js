import React from 'react';
// import Welcome from './containers/Welcome';
import { BrowserRouter as Router } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import MainPanel from './containers/MainPanel';
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './theme';
require('dotenv').config();

class App extends React.Component {
  render() {
    return (
			<div>
				<MuiThemeProvider theme={theme}>
					<CssBaseline />
					{/* <Welcome />	 */}
					<Router>
						<MainPanel />
					</Router>
				</MuiThemeProvider>
			</div>
		);
  }
}

export default App;
