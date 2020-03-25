const styles = theme => ({
    button: {
        width: 160,
        padding: 8,
        marginBottom:10,
        },
    bookings:{
        width: '85%',
        minWidth: 400,
    },

    bookings__items:{
        display: 'flex',
        alignItems: 'center',
        padding: '12px 35px',
        marginBottom: 18,
    },
    bookings__basicDetails:{
        flex: 4,
    },
    booking__status:{
        color: theme.palette.primary.light,
        flex: 1,
    },
    booking__statusTrue: {
        color: theme.palette.secondary.dark,
        flex:1,
    },
    booking__btn:{
        flex:1, 
    },
    requestEmpty: {
        height: 300,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    buttonAddNew: {
        marginTop: 15,
       padding: 12,  
    }
});

export default styles;
