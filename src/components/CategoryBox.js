import React from 'react';
import { Typography } from '@material-ui/core';
import useStyles from '../styles/components/CategoryBox';
import { Link  } from 'react-router-dom';



function CategoryBox(props) {
	const classes = useStyles();
    const { data} = props
    return (
			<Link to={`/services/${data.name}`} className={classes.CategoryBoxtext}>
				<div className={classes.CategoryBox}>
					<img
						className={classes.categoryImg}
						src={data.image}
						alt="category"
					/>
					<Typography variant="body2">{data.name}</Typography>
				</div>
			</Link>
		);
}
export default CategoryBox;