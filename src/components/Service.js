import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/components/Service'


class Service extends React.Component {
  render() {
    const { service, classes } = this.props;

    return (
			<Link
				to={'services/' + service.category + '/' + service.name}
				onClick={() =>
					localStorage.setItem('selectedService', JSON.stringify(service))
				}
			>
				<div className={classes.serviceBox}>
					<img src={service.image} alt="service_image" style={{ height: 70 }} />{' '}
					<br></br>
					<Typography variant="h6">{service.name}</Typography>
				</div>
			</Link>
		);
  }
}

export default withStyles(styles)(Service);
