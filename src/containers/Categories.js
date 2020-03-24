import React from 'react';
import CategoryBox from '../components/CategoryBox';
import BuilderSVG from '../images/svg/002-builder.svg';
import RenovatingSVG from '../images/svg/003-maintenance.svg';
import ElectricianSVG from '../images/svg/009-electrician.svg';
import HandymanSVG from '../images/svg/017-carpenter.svg';
import PlumberSVG from '../images/svg/012-plumber.svg';
import CleanerSVG from '../images/svg/008-pressure-washer.svg';
import RemovalSVG from '../images/svg/014-transport.svg';
import WindowFitterSVG from '../images/svg/016-windows.svg';
import useStyles from '../styles/containers/Categories';
import { Typography } from '@material-ui/core';


const CategoriesData = [
	{ name: 'Builder', image: BuilderSVG },
	{ name: 'Renovating', image: RenovatingSVG },
	{ name: 'Electrician', image: ElectricianSVG },
	{ name: 'Removal Service', image: RemovalSVG },
	{ name: 'Handyman', image: HandymanSVG },
	{ name: 'Cleaner', image: CleanerSVG },
	{ name: 'Plumber', image: PlumberSVG },
	{ name: 'Window Fitter', image: WindowFitterSVG }
];


function Categories() {
	const classes = useStyles();
	return (
		<div className={classes.CategoriesSection}>
			<Typography variant="h5">Category of Services</Typography>
			<div className={classes.Categories}>
				{CategoriesData.map(category => (
					<CategoryBox data={category} key={category.name}/>
				))}
			</div>
		</div>
	);
}
export default Categories;
