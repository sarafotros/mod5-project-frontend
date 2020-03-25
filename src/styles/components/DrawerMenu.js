import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	activeMenuItem: {
		color: `${theme.palette.primary.light}!important`,

		'&>div': {
			borderRight: `2px solid ${theme.palette.primary.dark}`
		},
		'& i': {
			color: theme.palette.primary.light
		}
	},
	MenuItem: {
		color: theme.palette.primary.main
	}
}));

export default useStyles;