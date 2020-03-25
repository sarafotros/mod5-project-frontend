import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	ContactBox: {
		padding: 40
	},
	ContactInfo: {
		display: 'flex',
		justifyContent: 'space-between',
		[theme.breakpoints.down('sm')]: {
			flexDirection: 'column'
		}
	},
	ContactEmail: {
		display: 'flex',
		flexDirection: 'column'
	},
	ContactIcon: {
		marginBottom: -5,
		marginRight: 10
	},
	ContactText: {
		marginTop: 20
	},
	contactMap: {
		height: '400px',
		width: '50%',
		[theme.breakpoints.down('sm')]: {
			width: '100%',
			height: 250,
			marginTop: 15
		}
	},
    ContactBoxTitle: {
        marginBottom: 14,
    }
}));

export default useStyles;
