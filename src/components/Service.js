import React from 'react';
import { Link } from 'react-router-dom';

class Service extends React.Component {
  render() {
    const { service } = this.props;
    // console.log('service', service);
    return (
      <Link
        to={"services/" + service.name}
        onClick={() =>
          localStorage.setItem('selectedService', JSON.stringify(service))
        }
      >
        <div className='service-box'>{service.name}</div>
        {/* <img src={service.image} alt="logo"/> */}
      </Link>
    );
  }
}

export default Service;
