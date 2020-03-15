import React, { Component } from 'react';

export default class Description extends Component {
  render() {
    const service = JSON.parse(localStorage.getItem('selectedService'));
    console.log('service', service);
    return (
      <div>
        <h3>{service.name} </h3>{' '}
        <div className='description__mainBox'>
          <div>
            <img
              src={service.image}
              className='description__image'
              alt={service.name}
            />
          </div>
          <p className='description__details'>{service.description}</p>
        </div>
        <div>
          <h4>
            <span className='description_priceLabel'>price: </span>
            <span className='description_currency'>£</span>
            {service.price}
          </h4>
        </div>
      </div>
    );
  }
}
