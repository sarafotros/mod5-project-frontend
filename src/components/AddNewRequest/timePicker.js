import React, { Component } from 'react';
// import WheelPicker from 'react-simple-wheel-picker';
import * as moment from 'moment';

export default class TimerPicker extends Component {
  state = {
    dates: [],
  };

  // componentDidMount() {
  // 	this.setState({
  // 		dates: mockData.dates.map(date => {
  // 			return {
  // 				id: date.id,
  // 				value: moment(date.value).format('MMMM Do')
  // 			};
  // 		})
  // 	});
  // }

  render() {
    const {
      selectedDay,
      selectedHour,
      changeSelectedDay,
      changeSelectedHour,
    } = this.props;
    return (
      <div className='timePicker'>
        <div className='timePicker__dayPicker'>
          <label>Select a Date:</label>
          <input
            type='date'
            name='date'
            value={selectedDay}
            onChange={changeSelectedDay}
            // onChange={(event)=>changeSelectedDay(event)}
          />
        </div>
        <div className='timePicker__hoursPicker'>
          <input
            type='time'
            name='app'
            min='09:00'
            max='18:00'
            required
            value={selectedHour}
            onChange={changeSelectedHour}
          />
          <small>Booking hours are 9am to 6pm</small>
        </div>
      </div>
    );
  }
}
