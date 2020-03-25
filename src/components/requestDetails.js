import React from 'react';
import API from '../API';
import { withRouter ,Redirect } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/components/requestDetails'

class RequestDetails extends React.Component {
	state = {
		requestDetails: null
	};

	getRequestDetails = (id) => {
		API.getRequestDetails(id).then(requestDetails =>
			this.setState({ requestDetails })
		);
	};

	componentDidMount() {
		// const { logIn } = this.props
		// // console.log("1")
		// // if (localStorage.token) {
		// // 	API.validate(localStorage.token).then(json =>
		// // 		logIn(json.user, json.token)
		// // 	);
		// // }
		this.getRequestDetails(this.props.match.params.id);
	}

	render() {
        console.log('props', this.props)
		const { requestDetails } = this.state
		const { classes } = this.props
		if (!localStorage.token) {
			return <Redirect to="/" />;
		}
        return requestDetails ? (
					<Paper className={classes.paper}>
						<div className={classes.paperText}>
							<h2>{requestDetails.service.name}</h2>
							<h2>Date: {requestDetails.date}</h2>
							<h3>Time: {requestDetails.time}</h3>
							<p>
								{' '}
								Address: no.{requestDetails.number} , Post Code:{' '}
								{requestDetails.post_code}{' '}
							</p>
						</div>
						<img
							src={requestDetails.image_url}
							alt="logo"
							style={{ width: '40%', height: '35%' }}
						/>
					</Paper>
				) : (
					<h2>Loading...</h2>
				);
	}
}
 //HOC higher order component 
 const requestDetailsWithRouter = withRouter(RequestDetails)
export default withStyles(styles)(requestDetailsWithRouter);