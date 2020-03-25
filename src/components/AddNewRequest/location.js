import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/components/AddNewRequest/location'
import { TextField } from '@material-ui/core';
import GoogleMapReact from 'google-map-react';
import MarkerIcon from '@material-ui/icons/LocationOn';

const APIkey = process.env.REACT_APP_GOOGLE_API;

class LocationForm extends Component {

	onMapClicked = newCenter => {
		console.log(newCenter);
		this.props.changeCenter(newCenter);
	};

	render() {
		const {
			center,
			zoom,
			number,
			postCode,
			changeNumber,
			changePostCode,
			classes
		} = this.props;

		return (
			<div className={classes.LocationFormBox}>
				<div className={classes.LocationFormInput}>
					<TextField
						label="Number"
						type="text"
						value={number}
						onChange={e => changeNumber(e.target.value)}
					/>
				</div>
				<div className={classes.LocationFormInput}>
					<TextField
						label="Post Code"
						type="text"
						value={postCode}
						onChange={e => changePostCode(e.target.value)}
					/>
				</div>

				<div style={{ height: '400px', width: '50%' }}>
					<GoogleMapReact
						bootstrapURLKeys={{ key: APIkey }}
						center={center}
						zoom={zoom}
						onClick={this.onMapClicked}
					>
					<>
						<MarkerIcon />
					</>
					</GoogleMapReact>
				</div>
			</div>
		);
	}
}
export default withStyles(styles)(LocationForm);
