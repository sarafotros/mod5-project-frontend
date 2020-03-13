import React from 'react';
import { Link } from 'react-router-dom';

class Service extends React.Component {
    render() {
        const { service } = this.props;
        console.log('service', service);
        return (
            <Link to={service.name}>
                <div className='service-box'>{service.name}</div>
            </Link>
        );
    }
}

export default Service;