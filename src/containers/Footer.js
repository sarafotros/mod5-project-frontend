import React from 'react';
// import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import LogoImage from '../images/logo/handy.jpg';

class Footer extends React.Component {
    state = {  }
    render() { 
        return (
					<div style={{}}>
						<Link to="/signup-handy">
							<img
								src={LogoImage}
								alt="oh-no"
								style={{
									width: '250px',
									height: '250px',
									border: '2px solid grey'
								}}
							/>
						</Link>
					</div>
				);
    }
}
 
export default Footer;