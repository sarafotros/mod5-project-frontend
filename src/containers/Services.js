import React from 'react';
import Service from '../components/Service';



class Services extends React.Component {
	state = {
		services: [],
        searchTerm: '',
        filteredServices: []
	};

    searchServices = searchTerm => {
        const { services } = this.state

        console.log('searchTerm', searchTerm);
        console.log('services', services);
        const newServices = services.map(category => {
            return {
							category: category.category,
							items: category.items.filter(service =>
								service.name.toUpperCase().includes(searchTerm.toUpperCase())
							)
						};
        })
        console.log('newServices', newServices);
        this.setState({
            filteredServices: newServices
        });
    };

	componentDidMount() {
		const { services } = this.props;
		const servicesByCategory = [];
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
	}

	render() {
		const { filteredServices } = this.state;
		return (
			<div className="services">
				<input
					onChange={e => this.searchServices(e.target.value)}
					placeholder="Search..."
				/>

				{filteredServices.map(singleCategory => 
					singleCategory.items.length > 0 ? (
						<div key={singleCategory.category}>
							<h3>{singleCategory.category}</h3>
							<div className="services__categoryServices">
								{singleCategory.items.map(singleService => {
									return (
										<Service key={singleService.id} service={singleService} />
									);
								})}
							</div>
						</div>
					) : null
				)}
			</div>
		);
	}
}
 
export default Services;