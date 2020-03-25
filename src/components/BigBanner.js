import React, { Component } from 'react';
import BigBannerImage from '../images/banner/bigBanner3.jpg';
import { Paper, Button, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/components/BigBanner'


class BigBanner extends Component {
	render() {
	  const {  classes } = this.props;
		return (
			<Paper className={classes.bigBanner}>
				<img
					src={BigBannerImage}
					alt="Big Banner"
					className={classes.bigBanner__img}
				/>
				<div className={classes.bigBanner__text}>
					<Typography variant="h1" className={classes.bigBanner__h1}>
						Handy App
					</Typography>
					<Typography variant="h4">Get What You need done!</Typography>

					<Button
						className={classes.bigBanner__btn}
						variant="contained"
						color="primary"
						component={Link}
						to="/services"
					>
						Add A new request
					</Button>
				</div>
			</Paper>
		);
  }
}
export default withStyles(styles)(BigBanner);
