import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#ffffff',
			main: '#e0e0e0',
			dark: '#aeaeae'
		},
		secondary: {
			light: '#c3fdff',
			main: '#90caf9',
			dark: '#5d99c6'
		}
	},
	typography: {
		fontFamily: '"Baloo 2" ,cursive',
		h1: {
			fontSize: 70,
			fontWeight: 'bold'
		},
		h2: {
			fontSize: 60
		},
		h3: {
			fontSize: 50
		},
		h4: {
			fontSize: 40
		},
		h5: {
			fontSize: 30
		},
		h6: {
			fontSize: 22
		},
		body1: {
			fontSize: 20
		},
		body2: {
			fontSize: 16
		}
	}
});

export default theme;
