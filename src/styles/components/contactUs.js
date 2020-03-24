import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	ContactBox: {
		padding: 40
	},
	ContactInfo: {
        display: 'flex',
        justifyContent: 'space-between'
	},
	ContactEmail: {
		display: 'flex',
		flexDirection: 'column'
	},
    ContactIcon: {
        marginBottom: -5,
        marginRight: 10
    },
    ContactText:{
        marginTop:20
    }
}));

export default useStyles;
