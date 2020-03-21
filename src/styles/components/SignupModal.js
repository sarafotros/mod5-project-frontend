import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		padding: 16,
		width: 350,
		outline: 'none'
	},
	title: {
		textAlign: 'center'
	},
	addPersonIcon: {
		fontSize: 80
	},
	addPersonIconContainer: {
		borderRadius: '50%',
		backgroundColor: '#cfcfcf',
		textAlign: 'center',
		width: 'fit-content',
		padding: 16,
		marginTop: -75
	},
	signupText: {
		textAlign: 'center'
	},
	signuplink: {
		textDecoration: 'underline',
		color: 'blue',
		cursor: 'pointer'
	}
});

export default useStyles;
