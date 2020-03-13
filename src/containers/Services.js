import React from 'react';
import Service from '../components/Service';



class Services extends React.Component {
    state = {
        services:[]
    }
    
    // mapServices = () => {
    //     return this.props.services.map(service => (
    //         <Service service={service} key={service.id}/>
    //     ))
    // }


    componentDidMount() {
        const { services} = this.props
        const servicesByCategory = []
        for (let i = 0; i < services.length; i += 1){
            const currentItemCategory = servicesByCategory.find(
                (singleService) => singleService.category === services[i].category
            )
            if (currentItemCategory) {
                currentItemCategory.items.push(services[i])
            } else {
                servicesByCategory.push({
                    category: services[i].category,
                    items: [services[i]]
                })
            }
        }
        console.log('servicesByCategory', servicesByCategory)
        this.setState({
            services:servicesByCategory
        })
    } 

    render() { 
        const { services } = this.state;
        return ( 
            <div className='services'>
                {services.map((singleCategory) => {
                    return (
                        <div className={singleCategory.category}>
                            <h3>{singleCategory.category}</h3>
                            <div className='services__categoryServices'>
                                {singleCategory.items.map((singleService) => {
                                    return (
                                        <Service key={singleService.id} service={singleService} />
                                    )
                                })}
                            </div>
                     </div> 
                  )
                })}
            </div>
         );
    }
}
 
export default Services;