const styles = theme => ({
	serviceBox: {
        width: 300,
        height: 160,
		backgroundColor: theme.palette.primary.light,
		borderRadius: 8,
		boxShadow: `3px 4px ${theme.palette.secondary.light}`,
		margin: 8,
        cursor: 'pointer',
        padding: 10,
	}
});

export default styles;