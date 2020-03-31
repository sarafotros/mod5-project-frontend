import React from 'react';
import API from '../API'
import { Link } from 'react-router-dom';
import {  Redirect } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { Button, Typography, Paper } from '@material-ui/core';
import ShowIcon from '@material-ui/icons/EventNote';
import DeleteIcon from '@material-ui/icons/Delete';
import AcceptIcon from '@material-ui/icons/ThumbUp';
import AddRequestIcon from '@material-ui/icons/ShoppingCart';
import styles from '../styles/containers/Bookings';


class Bookings extends React.Component {
	state = {
		requests: null
	};

	getRequests = () => {
        API.getRequests().then(requests => this.setState({
            requests: (localStorage.role === 'user') ? (requests.filter(req => req.user_id == localStorage.user_id)) : requests
        }));
    };
    
    removeBooking = (id) => {
        API.removeRequest(id)
            .then(resp => {
                if (resp.status) {
                this.getRequests()
            } 
        })
	}
	
	editBooking = (id) => {
		const obj = { handy_man_id: parseInt(localStorage.handyman_id), 'confirmed?': true }
		API.editRequest(obj, id)
			.then(() => {
				this.getRequests()
			})
	}

    componentDidMount() {
        // const { logIn } = this.props
		// if (localStorage.token) {
		// 	API.validate(localStorage.token).then(json =>
		// 		logIn(json.user, json.token)
		// 	);
		// }
		this.getRequests();
    }
    

    render() {
        const { classes } = this.props
        const { requests } = this.state
        if (!localStorage.token) { return <Redirect to="/" />}
        return requests ? (
					<>
						{requests.length > 0 ? (
							<div className={classes.bookings}>
								{requests.reverse().map(req => (
									<Paper key={req.id} className={classes.bookings__items}>
										<div className={classes.bookings__basicDetails}>
											<Typography variant="h5">{req.service.name}</Typography>
											<Typography variant="body1">{req.date}</Typography>
											<Typography variant="body1">{req.time}</Typography>
										</div>
										{req['confirmed?'] ? (
											<div className={classes.booking__statusTrue}>
												<Typography variant="h6">
													{localStorage.handyman_id == req.handy_man_id ||
													localStorage.role === 'user'
														? 'Confirmed'
														: 'Taken'}
													{/* (localStorage.role === 'handyman' ?'Taken' :
													'Confirmed') */}
												</Typography>
											</div>
										) : (
											<div className={classes.booking__status}>
												<Typography variant="h6">Pending</Typography>
											</div>
										)}
										<div className={classes.booking__btn}>
											<Link to={'bookings/' + req.id}>
												<Button
													variant="contained"
													color="primary"
													className={classes.button}
													endIcon={<ShowIcon />}
												>
													Show Details
												</Button>
											</Link>
											{localStorage.role === 'user' && (
												<Button
													onClick={() => this.removeBooking(req.id)}
													variant="contained"
													color="secondary"
													className={classes.button}
													endIcon={<DeleteIcon />}
													disabled={req['confirmed?']}
												>
													Delete
												</Button>
											)}
											{localStorage.role === 'handyman' &&
												localStorage.specialty === req.service.category && (
													<Button
														onClick={() => this.editBooking(req.id)}
														variant="contained"
														color="secondary"
														className={classes.button}
														endIcon={<AcceptIcon />}
														disabled={req['confirmed?']}
													>
														Accept
													</Button>
												)}
										</div>
									</Paper>
								))}
							</div>
						) : (
							<Paper className={classes.requestEmpty}>
								<Typography variant="h5">
									You have no request to show
								</Typography>
								<Button
									variant="contained"
									color="primary"
									className={classes.buttonAddNew}
									endIcon={<AddRequestIcon />}
									component={Link}
									to="/services"
								>
									Get What You Need Done!
								</Button>
							</Paper>
						)}
					</>
				) : (
					<h3>Loading ...</h3>
				);
	}
}
 
export default withStyles(styles)(Bookings);