import React from 'react';
import {  Route } from 'react-router-dom'
import HomePage from './Homepage';
import Services from './Services';
import ContactUs from '../components/ContactUs'
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
				<Route exact path="/services/:category">
					<Services />
				</Route>
				<Route exact path="/services/:category/:service">
					<AddNewRequest />
				</Route>
				<Route exact path="/bookings/:id">
					<RequestDetails />
				</Route>
				<Route exact path="/bookings">
					<Bookings />
				</Route>
				<Route exact path="/contact-us">
					<ContactUs />
				</Route>
			</>
		);
}
export default MainRouter ;