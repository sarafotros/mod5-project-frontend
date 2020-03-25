import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
	button: {
		width: 160,
		padding: 8,
		marginBottom: 10
	},
    contractBox: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 15,
        marginBottom:10,
    }
}));

export default useStyles;
