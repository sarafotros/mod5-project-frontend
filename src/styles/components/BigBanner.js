const styles = theme => ({
	bigBanner: {
		padding: 10,
		width: '100%',
		height: 500,
		borderRadius: '12px !important',
		position: 'relative'
	},
	bigBanner__img: {
		width: '100%',
		height: '100%',
		borderRadius: 12
	},
	bigBanner__text: {
		position: 'absolute',
		top: 10,
		right: '50%',
		[theme.breakpoints.down('sm')]: {
			right: 'unset'
		}
	},
    bigBanner__btn: {
       marginTop:12, 
    }
});
export default styles;
