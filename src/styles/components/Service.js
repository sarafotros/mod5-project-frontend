const styles = theme => ({
	serviceBox: {
        width: 300,
        height: 160,
		backgroundColor: theme.palette.primary.main,
		borderRadius: 8,
		boxShadow: `3px 4px ${theme.palette.secondary.dark}`,
		margin: 8,
        cursor: 'pointer',
        padding: 10,
	}
});

export default styles;