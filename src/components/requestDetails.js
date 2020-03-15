import React from 'react';
import API from '../API';
import { withRouter } from 'react-router-dom';

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
		if (localStorage.token) {
			API.validate(localStorage.token).then(json =>
				this.logIn(json.user, json.token)
			);
		}
		this.getRequestDetails(this.props.match.params.id);
	}

	render() {
		
        console.log('props', this.props)
        const {requestDetails} = this.state
        return (
           requestDetails ?  <div>
                <h2>{requestDetails.service.name}</h2>
                <h2>Date: {requestDetails.date}</h2>
                <h3>Time: {requestDetails.time}</h3>
                <p> Address: no.{requestDetails.number} , Post Code: {requestDetails.post_code} </p>
                <img src={requestDetails.image_url} alt="logo" style={{ width: "40%", height: "35%" }} />

            </div> : <h2>Loading...</h2>
        )
	}
}
 //HOC higher order component 
export default withRouter(RequestDetails);