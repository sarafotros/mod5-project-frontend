import React from 'react';
import TimeTest from '../components/TimeTest'
import LogoMain from '../images/logo/listofrequest.jpg';
import { Link } from 'react-router-dom';


const MainComp = () => {

	console.log("main")
	// landing page...
	return (
		<div>
			<TimeTest />
			<Link to="/booking/services">
			<img src={LogoMain} alt="main logo" style={{
				width: '250px',
				height: '250px',
				border: '2px solid grey'
				}} /></Link>
			</div>
		);
}
 
export default MainComp;