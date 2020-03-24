import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
	Categories: {
		minHeight: 160,
		display: 'flex',
        flexDirection: 'row',
        margin: '10px 0 20px',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    CategoriesSection: {
        marginTop: 18,
    }
});
export default useStyles;