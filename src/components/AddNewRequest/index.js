import React from 'react';
import Description from './description';
import TimePicker from './timePicker';
import LocationForm from './location';
import UploadData from './Upload';
import * as moment from 'moment';



const levels = [
	{
		title: 'description',
		value: 'DESCRIPTION'
	},
	{
		title: 'timePicker',
		value: 'TIME_PICKER'
	},
	{
		title: 'location',
		value: 'LOCATION_FORM'
	},
	{
		title: 'upload data',
		value: 'UPLOAD_DATA'
	}
];

class AddNewRequest extends React.Component {
	state = {
		currentLevel: 0,
		body: {
			coordinates: [-0.0874836, 51.5202116],
			number: '',
			postCode: '',
			selectedHour: {
				id: 5,
				value: '12:00'
			},
			selectedDay: {
				id: 1,
				value: moment().format('MMMM Do')
			}
		}
	};

	changeCoordinates = newCoordinates => {
		this.setState({
			coordinates: newCoordinates
		});
	};

	changeNumber = newValue => {
		this.setState({
			number: newValue
		});
	};
	changePostCode = newValue => {
		this.setState({
			postCode: newValue
		});
	};
	changeSelectedDay = newValue => {
		this.setState({
			selectedDay: newValue
		});
	};
	changeSelectedHour = newValue => {
		this.setState({
			selectedHour: newValue
		});
	};

	goNextPage = () => {
		const { currentLevel } = this.state;
		this.setState({ currentLevel: currentLevel + 1 });
	};

	goPrevPage = () => {
		const { currentLevel } = this.state;
		this.setState({ currentLevel: currentLevel - 1 });
	};

	render() {
		console.log('adding new request');
		const {
			currentLevel,
			coordinates,
			number,
			postCode,
			selectedDay,
			selectedHour
		} = this.state;
		return (
			<div>
				{levels[currentLevel].value === 'DESCRIPTION' && <Description />}
				{levels[currentLevel].value === 'TIME_PICKER' && (
					<TimePicker
						selectedDay={selectedDay}
						selectedHour={selectedHour}
						changeSelectedDay={this.changeSelectedDay}
						changeSelectedHour={this.changeSelectedHour}
					/>
				)}
				{levels[currentLevel].value === 'LOCATION_FORM' && (
					<LocationForm
						changeCoordinates={this.changeCoordinates}
						changeNumber={this.changeNumber}
						changePostCode={this.changePostCode}
						number={number}
						postCode={postCode}
						coordinates={coordinates}
					/>
				)}
				{levels[currentLevel].value === 'UPLOAD_DATA' && <UploadData />}
				<div>
					<button disabled={currentLevel === 0} onClick={this.goPrevPage}>
						Back
					</button>
					<button
						disabled={currentLevel === levels.length - 1}
						onClick={this.goNextPage}
					>
						Next
					</button>
				</div>
			</div>
		);
	}
}

export default AddNewRequest;