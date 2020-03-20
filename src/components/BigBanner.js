import React, { Component } from 'react';
import BigBannerImage from '../images/banner/bigBanner.jpg';
import { Paper, Button } from '@material-ui/core';

export default class BigBanner extends Component {
  render() {
    return (
      <Paper className='bigBanner'>
        <img src={BigBannerImage} alt='Big Banner' className='bigBanner__img' />
        <div className='bigBanner__text'>
          <h1>Handy App</h1>
          <h3>get your works done.</h3>
          <Button variant='outlined'>Add new request</Button>
        </div>
      </Paper>
    );
  }
}
