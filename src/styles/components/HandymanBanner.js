import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  paper: {
    width: '100%',
    height: 500,
    borderRadius: 12,
    position: 'relative',
  },
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    opacity: 0.9,
  },
  text: {
    position: 'absolute',
    top: 50,
    left: '5%',
  },
  button: {
    marginTop: 20,
    width: 200,
    fontSize: 16,
  },
});

export default useStyles;
