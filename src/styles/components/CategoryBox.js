import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
	CategoryBox: {
		height: 130,
		width: 150,
		display: 'flex',
		flexDirection: 'column',
		margin: 12,
		padding: 15,
		border: `2px solid ${theme.palette.primary.light}`,
		borderRadius: 6,
		boxShadow: '4px 5px 5px #c1c0c0',
		alignItems: 'center'
	},
	categoryImg: {
		height: 74,
		width: 'auto',
		marginBottom: 5
	},
    CategoryBoxtext:{
        textDecoration: "none",
    }
}));
export default useStyles;