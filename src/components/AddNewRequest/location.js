import React, { Component } from 'react';
import {
  GoogleMap,
  Marker,
  withGoogleMap,
  withScriptjs,
} from 'react-google-maps';
import { withRouter } from 'react-router-dom';

// function getCoordinates(address) {
// 	fetch(
// 		'https://maps.googleapis.com/maps/api/geocode/json?address=' +
// 			address +
// 			'&key=' +
// 			'AIzaSyAqrwNRHTXGSnwdwg_cUYVwvK4vvsnk06c'
// 	)
// 		.then(response => response.json())
// 		.then(data => {
// 			const latitude = data.results.geometry.location.lat;
// 			const longitude = data.results.geometry.location.lng;
// 			console.log({ latitude, longitude });
// 		});
// }

class LocationForm extends Component {
  //   onMapClick = (e, f) => {
  //     const { changeCoordinates } = this.props;
  //     const longitude = f.lngLat.lng;
  //     const latitude = f.lngLat.lat;
  //     const coord = [longitude, latitude];
  //     changeCoordinates(coord);
  //   };

  // componentDidMount() {
  // 	const postCode = 'ec2a 1nt';
  // 	getCoordinates(postCode);
  // }

  render() {
    const {
      coordinates,
      number,
      postCode,
      changeNumber,
      changePostCode,
      changeCoordinates,
    } = this.props;
    return (
      <div>
        <div>
          <label>Number</label>
          <input
            type='text'
            value={number}
            onChange={(e) => changeNumber(e.target.value)}
          />
        </div>
        <div>
          <label>PostCode</label>
          <input
            type='text'
            value={postCode}
            onChange={(e) => changePostCode(e.target.value)}
          />
        </div>
        <div>
          <GoogleMap
            defaultZoom={8}
            defaultCenter={coordinates}
            onClick={(event) =>
              changeCoordinates({
                lat: event.latLng.lat(),
                lng: event.latLng.lng(),
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

export default withScriptjs(withGoogleMap(LocationForm));
