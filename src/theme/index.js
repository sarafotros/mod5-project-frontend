import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

let theme = createMuiTheme({
	palette: {
		// light blue grey
		// primary: {
		// 	light: '#ffffff',
		// 	main: '#e0e0e0',
		// 	dark: '#aeaeae'
		// },
		// secondary: {
		// 	light: '#c3fdff',
		// 	main: '#90caf9',
		// 	dark: '#5d99c6'
		// }

		// // red+dark grey
		// primary: {
		// main: '#37474f',
		// light: '#62727b',
		// dark: '#102027'
		// },
		// secondary: {
		// 	main: '#b71c1c',
		// 	light: '#f05545',
		// 	dark: '#7f0000'
		// },

		// primary: {
		// 	// main: '#9e9e9e',
		// 	light: '#cfcfcf',
		// 	// dark: '##707070'
		// 	main: '#606060',
		// 	//   light: '#8d8d8d',
		// 	dark: '#363636'
		// },
		// secondary: {
		// 	main: '#f8bbd0',
		// 	light: '#ffeeff',
		// 	dark: '#c48b9f'
		// }

		// blue grey dark
		primary: {
			main: '#606060',
			light: 'rgba(150, 149, 149, 0.38)',
			dark: '#363636'
		},
		secondary: {
			main: '#80deea',
			light: '#b4ffff',
			dark: '#4bacb8'
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
	},
	paper: {
		backgroundColor: 'red'
	}
});

theme = responsiveFontSizes(theme);
export default theme;

// primary: {
//     main: '#9e9e9e',
//     light: '#cfcfcf',
//     dark: '##707070'
//   },
//   secondary: {
//     main: '#f06292',
//     light: '#ff94c2',
//     dark: '#ba2d65'
//   }

// primary: {
//     main: '#606060',
//     light: '#8d8d8d',
//     dark: '#363636'
//   },
//   secondary: {
//     main: '#80deea',
//     light: '#b4ffff',
//     dark: '#4bacb8'
//   }