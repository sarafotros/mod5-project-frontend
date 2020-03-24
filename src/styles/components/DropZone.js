import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    DropzoneBox: {
        border: '6px double #cac9c9',
        height: 90,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#dadadac2',
        width: '70%',
        borderRadius: 14,
    }
}));
export default useStyles;