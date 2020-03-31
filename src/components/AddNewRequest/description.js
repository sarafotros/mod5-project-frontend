import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import styles from '../../styles/components/AddNewRequest/description';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


 class Description extends Component {
  render() {
    const service = JSON.parse(localStorage.getItem('selectedService'));
	  const { classes } = this.props
	   if (!service) {
				return <Redirect to="/" />;
			}
    return (
			<div>
				<Typography className={classes.description__Title} variant="h3">
					{service.name}
				</Typography>
				<div className={classes.description__mainBox}>
					<div>
						<img
							src={service.image}
							className={classes.description__image}
							alt={service.name}
						/>
					</div>
					<Typography variant="body1" className={classes.description__details}>
						{service.description}
					</Typography>
				</div>
				<div className={classes.description_price}>
					<Typography variant="h4">
						<span className={classes.description_priceLabel}>price: </span>
						<span className={classes.description_currency}>£</span>
						{service.price}
					</Typography>
				</div>
			</div>
		);
  }
}
export default withStyles(styles)(Description);