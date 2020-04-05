import React from 'react';
import Service from '../components/Service';
import API from '../API';
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import styles from '../styles/containers/Services'
import { Typography, TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';


class Services extends React.Component {
	state = {
		services: [],
		searchTerm: '',
		filteredServices: null
	};

	getServices = () => {
		const { match } = this.props
		const selectedCategory = match.params.category 

		API.getServices().then(services => {
			const servicesByCategory = [
				// { category: 'painting', items: [a, b, c] },
				// { category: 'cleaning', items: [a, b, c] }
			];
			if (selectedCategory) {
				services = services.filter(
					service => service.category === selectedCategory
				); 
			}
			for (let i = 0; i < services.length; i += 1) {
				const currentItemCategory = servicesByCategory.find(
					singleService => singleService.category === services[i].category
				);
				if (currentItemCategory) {
					currentItemCategory.items.push(services[i]);
				} else {
					servicesByCategory.push({
						category: services[i].category,
						items: [services[i]]
					});
				}
			}
			console.log('servicesByCategory', servicesByCategory);
			this.setState({
				services: servicesByCategory,
				filteredServices: servicesByCategory
			});
		});
	};

	searchServices = searchTerm => {
		const { services } = this.state;

		console.log('searchTerm', searchTerm);
		console.log('services', services);

		const newServices = services.map(category => {
			return {
				category: category.category,
				items: category.items.filter(service =>
					service.name.toUpperCase().includes(searchTerm.toUpperCase())
				)
			};
		});
		console.log('newServices', newServices);
		this.setState({
			filteredServices: newServices
		});
	};

	componentDidMount() {
		this.getServices()
	}

	render() {
		const { filteredServices } = this.state;
		const { classes } = this.props;
		return (
		
		<>
				{filteredServices ?
				<div className = "services">
				<div className = { classes.servicesHeader } >
				<Typography variant="h3">All Services</Typography>
				<TextField
				onChange={e => this.searchServices(e.target.value)}
				className={classes.margin}
				label="Search"
				InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchIcon />
						</InputAdornment>
					)
				}}/>	
				</div>	
			     {filteredServices.map(singleCategory =>
				 singleCategory.items.length > 0 ? (
					<div key={singleCategory.category}>
						<Typography className={classes.servicesCategoryText} variant="h4">{singleCategory.category}</Typography>
						<div className={classes.services__categoryServices}>
							{singleCategory.items.map(singleService => {
								return (
									<Service key={singleService.id} service={singleService} />
								);
							})}
						</div>
					</div>
				) : null
				)
			}
			</div>
			:
			<Typography variant="h3">Loading...</Typography>}
		</>
		);
	}
}

const ServicesWithRouter = withRouter(Services)
export default withStyles(styles)(ServicesWithRouter);