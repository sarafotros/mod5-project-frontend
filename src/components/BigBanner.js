import React, { Component } from 'react';
import BigBannerImage from '../images/banner/bigBanner3.jpg';
import { Paper, Button, Typography } from '@material-ui/core';

export default class BigBanner extends Component {
  render() {
    return (
			<Paper className="bigBanner">
				<img src={BigBannerImage} alt="Big Banner" className="bigBanner__img" />
				<div className="bigBanner__text">
					<Typography variant="h1">Handy App</Typography>
					<Typography variant="h4">Get What You need done!</Typography>
					<Button variant="outlined" color="primary">
						Add new request
					</Button>
				</div>
			</Paper>
		);
  }
}
