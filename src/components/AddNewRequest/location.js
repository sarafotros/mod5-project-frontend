import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

function getCoordinates(address) {
	fetch(
		'https://maps.googleapis.com/maps/api/geocode/json?address=' +
			address +
			'&key=' +
			'AIzaSyAqrwNRHTXGSnwdwg_cUYVwvK4vvsnk06c'
	)
		.then(response => response.json())
		.then(data => {
			const latitude = data.results.geometry.location.lat;
			const longitude = data.results.geometry.location.lng;
			console.log({ latitude, longitude });
		});
}

const Map = ReactMapboxGl({
	accessToken:
		'pk.eyJ1IjoiaGFtaWRrMTAzMCIsImEiOiJjazdwMzltaDUwNGJyM2ducmpsY2Z3MGJoIn0.rZgrXUTVKe8ThAs5mYWyQA'
});

export default class LocationForm extends Component {
	onMapClick = (e, f) => {
		const { changeCoordinates } = this.props;
		const coord = [];
		const longitude = f.lngLat.lng;
		const latitude = f.lngLat.lat;
		coord.push(longitude, latitude);
		changeCoordinates([longitude, latitude]);
	};

	componentDidMount() {
		// const postCode = 'ec2a 1nt';
		// getCoordinates(postCode);
	}

	render() {
		const {
			coordinates,
			number,
			postCode,
			changeNumber,
			changePostCode
		} = this.props;
		return (
			<div>
				<div>
					<label>Number</label>
					<input
						type="text"
						value={number}
						onChange={e => changeNumber(e.target.value)}
					/>
				</div>
				<div>
					<label>PostCode</label>
					<input
						type="text"
						value={postCode}
						onChange={e => changePostCode(e.target.value)}
					/>
				</div>
				<div>
					<Map
						style="mapbox://styles/mapbox/streets-v9"
						containerStyle={{
							height: '50vh',
							width: '50vw'
						}}
						onClick={this.onMapClick}
						center={coordinates}
					>
						<Layer
							type="symbol"
							id="marker"
							layout={{ 'icon-image': 'marker-15' }}
							onMapClick={this.onMapClick}
						>
							<Feature coordinates={coordinates} />
						</Layer>
					</Map>
				</div>
				;
			</div>
		);
	}
}
