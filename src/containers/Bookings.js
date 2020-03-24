import React from 'react';
import API from '../API'
import { Link } from 'react-router-dom';
import {  Redirect } from 'react-router-dom';


class Bookings extends React.Component {
	state = {
		requests: null
	};

	getRequests = () => {
        API.getRequests().then(requests => this.setState({
            requests: (localStorage.role === 'user') ? (requests.filter(req => req.user_id == localStorage.user_id)) : requests
        }));
	};

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
        const { requests } = this.state
        if (!localStorage.token) { return <Redirect to="/" />}
        return requests ? (
                <div className="bookings">
                    {requests.map(req => (
                        <div key={req.id} className="bookings__items">
                            <div className="bookings__basicDetails">
                                <h4>{req.service.name}</h4>
                                <h5>{req.date}</h5>
                                <h5>{req.time}</h5>
                            </div>
                            <div className="booking__status">Pending</div>
                            <div className="booking__btn">
                                <Link to={'bookings/' + req.id }>
                                    <button>Show Details</button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
				) : (
					<h3>Loading ...</h3>
				);
	}
}
 
export default Bookings;