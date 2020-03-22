import React from 'react';
import {  Route } from 'react-router-dom'
import HomePage from './Homepage';
import Services from './Services';
import AddNewRequest from '../components/AddNewRequest';
import RequestDetails from '../components/requestDetails';
import Bookings from './Bookings';



function MainRouter() {
    return (
			<>
				<Route exact path="/">
					<HomePage />
				</Route>
				<Route exact path="/services">
					<Services />
				</Route>
				<Route exact path="/services/:id">
					<AddNewRequest />
				</Route>
				<Route exact path="/bookings/:id" >
                    <RequestDetails  />
                </Route>
                <Route exact path="/bookings">
                    <Bookings />
				</Route>
			</>
		);
}
export default MainRouter ;