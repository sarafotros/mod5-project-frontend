import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/components/AddNewRequest/location'
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';
import { TextField } from '@material-ui/core';


// let APIkey = AIzaSyAqaghXFHfeXGeqDFRynev2UoLS9HXyibY;




class LocationForm extends Component {

  render() {
    const {
      coordinates,
      number,
      postCode,
      changeNumber,
      changePostCode,
      changeCoordinates,
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
				<div>
					<GoogleMap
						defaultZoom={8}
						defaultCenter={coordinates}
						onClick={event =>
							changeCoordinates({
								lat: event.latLng.lat(),
								lng: event.latLng.lng()
							})
						}
					>
						<Marker position={coordinates} />
					</GoogleMap>
				</div>
			</div>
		);
  }
}

const LocationFormWithMap = withScriptjs(withGoogleMap(LocationForm));
export default withStyles(styles)(LocationFormWithMap);
