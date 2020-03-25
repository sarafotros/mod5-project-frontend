import React from 'react';
import Description from './description';
import TimePicker from './timePicker';
import LocationForm from './location';
import UploadData from './Upload';
import * as moment from 'moment';
import { withRouter, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from '../../styles/components/AddNewRequest';
import { Button, Typography } from '@material-ui/core';
import NextIcon from '@material-ui/icons/KeyboardArrowRight';
import BackIcon from '@material-ui/icons/KeyboardArrowLeft';
import SubmitIcon from '@material-ui/icons/Done';

// const URLUpload = 'https://handy-app-sf.herokuapp.com/upload-photos';
const URLUpload = 'http://localhost:3001/upload-photos';

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
		center: { lng: -0.0874836, lat: 51.5202116 },
		zoom: 11,
		number: '',
		postCode: '',
		selectedHour: new Date(),
		selectedDay: new Date(),
		description: '',
		image: '',
		imageName: ''
	};

	// taking states from child components
	changeCenter = newCenter => {
		this.setState({
			center: { lng: newCenter.lng, lat:newCenter.lat }
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
	changeSelectedDay = event => {
		this.setState({
			selectedDay: event
		});
	};
	changeSelectedHour = event => {
		console.log(event);
		
		this.setState({
			selectedHour: event
		});
	};

	changePhotoDescription = event => {
		this.setState({
			description: event.target.value
		});
	};

	changeImage = files => {
		console.log(files[0]);
		
		this.setState({
			image: files[0],
			imageName: files[0].name
		});
	};

	// next page button
	goNextPage = () => {
		const { currentLevel } = this.state;
		this.setState({ currentLevel: currentLevel + 1 });
	};

	goPrevPage = () => {
		const { currentLevel } = this.state;
		this.setState({ currentLevel: currentLevel - 1 });
	};

	submitRequest = () => {
		const {
			image,
			description,
			selectedDay,
			selectedHour,
			number,
			postCode
		} = this.state;
		const formData = new FormData();
		formData.append('photo', image);
		formData.append('description', description);
		formData.append('date', selectedDay);
		formData.append('time', moment(selectedHour).format("hh:mm"));
		formData.append('number', number);
		formData.append('post_code', postCode);
		formData.append('user_id', localStorage.user_id);
		formData.append('service_id', JSON.parse(localStorage.selectedService).id);

		return fetch(URLUpload, {
			method: 'POST',
			headers: {},
			body: formData
		})
			.then(resp => resp.json())
			.then(data => {
				console.log(data.image_url);
				this.props.history.push('/bookings/' + data.request.id);
			});
	};

	render() {
		const {
			currentLevel,
			number,
			postCode,
			selectedDay,
			selectedHour,
			description,
			image,
			imageName,
			zoom,
			center 
		} = this.state;
		const { classes } = this.props;

		return (
			<div className={classes.AddNewRequestBox}>
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
						number={number}
						postCode={postCode}
						changeCenter={this.changeCenter}
						changeNumber={this.changeNumber}
						changePostCode={this.changePostCode}
						zoom={zoom}
						center={center}
					/>
				)}
				{levels[currentLevel].value === 'UPLOAD_DATA' && (
					<UploadData
						description={description}
						image={image}
						imageName={imageName}
						changePhotoDescription={this.changePhotoDescription}
						changeImage={this.changeImage}
					/>
				)}
				{localStorage.role === 'user' && (
					<div className={classes.buttonGroup}>
						<Button
							disabled={currentLevel === 0}
							onClick={this.goPrevPage}
							variant="contained"
							color="primary"
							className={classes.button}
							startIcon={<BackIcon />}
						>
							Back
						</Button>
						{currentLevel !== levels.length - 1 && (
							<Button
								disabled={currentLevel === levels.length - 1}
								onClick={this.goNextPage}
								variant="contained"
								color="primary"
								className={classes.button}
								endIcon={<NextIcon />}
							>
								Next
							</Button>
						)}
						{currentLevel === levels.length - 1 && (
							<Button
								onClick={this.submitRequest}
								variant="contained"
								color="secondary"
								className={classes.button}
								endIcon={<SubmitIcon />}
							>
								Submit
							</Button>
						)}
					</div>
				)}
				{!localStorage.token && (
					<Typography variant="h5" className={classes.notUsersText}>
						You need to login or sign up
					</Typography>
				)}
				<div className={classes.AddNewRequestLink}>
					<Link to="/services">Back to All Services</Link>
				</div>
			</div>
		);
	}
}

const AddNewRequestWithRouter = withRouter(AddNewRequest);
export default withStyles(styles)(AddNewRequestWithRouter);
