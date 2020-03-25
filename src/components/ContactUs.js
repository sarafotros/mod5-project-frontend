import React from 'react';
import { Typography, Paper } from '@material-ui/core';
import useStyles from '../styles/components/contactUs';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import GoogleMapReact from 'google-map-react';
import MarkerIcon from '@material-ui/icons/LocationOn';

let APIkey = 'AIzaSyAqaghXFHfeXGeqDFRynev2UoLS9HXyibY';


function ContactUs ()  {
   
const classes = useStyles();
    return (
			<Paper className={classes.ContactBox}>
				<Typography variant="h4" className={classes.ContactBoxTitle}>
					Contact Us
				</Typography>
				<Typography variant="body1">
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don't look even slightly believable.
					If you are going to use a passage of Lorem Ipsum, you need to be sure
					there isn't anything embarrassing hidden in the middle of text. All
					the Lorem Ipsum generators on the Internet tend to repeat predefined
					chunks as necessary, making this the fi
				</Typography>
				<br />
				<br />
				<div className={classes.ContactInfo}>
					<div className={classes.ContactEmail}>
						<Typography className={classes.ContactText}>
							<EmailIcon className={classes.ContactIcon} /> sarafotros@gmail.com
						</Typography>
						<Typography className={classes.ContactText}>
							<PhoneIcon className={classes.ContactIcon} /> +44(0)99999999
						</Typography>
					</div>
					<div className={classes.contactMap}>
						<GoogleMapReact
							bootstrapURLKeys={{ key: APIkey }}
							defaultCenter={{ lng: -0.0874836, lat: 51.5202116 }}
							defaultZoom={11}
						>
							<>
								<MarkerIcon />
							</>
						</GoogleMapReact>
					</div>
				</div>
			</Paper>
		);
    
}
 
export default ContactUs;