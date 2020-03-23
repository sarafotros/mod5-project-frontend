import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
	palette: {
		primary: {
			light: '#63a4ff',
			main: '#1675d1',
			dark: '#1675d1'
		},
		secondary: {
			light: '#cfcfcf',
			main: '#9e9e9e',
			dark: '#707070'
		}
	},
	typography: {
		fontFamily: '"Baloo 2" ,cursive',
		h1: {
			fontSize: 60,
			fontWeight: 'bold'
		},
		h4: {
			fontSize: 26,
		}
	}
});

export default theme;
