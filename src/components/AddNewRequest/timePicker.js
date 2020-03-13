import React, { Component } from 'react';
import WheelPicker from 'react-simple-wheel-picker';
import * as moment from 'moment';

const mockData = {
	hours: [
		{
			id: 1,
			value: '08:00'
		},
		{
			id: 2,
			value: '09:00'
		},
		{
			id: 3,
			value: '10:00'
		},
		{
			id: 4,
			value: '11:00'
		},
		{
			id: 5,
			value: '12:00'
		},
		{
			id: 6,
			value: '13:00'
		}
	],
	dates: [
		{
			id: 1,
			value: '2020-03-12'
		},
		{
			id: 2,
			value: '2020-03-13'
		},
		{
			id: 3,
			value: '2020-03-14'
		}
	]
};

export default class TimerPicker extends Component {
	state = {
		dates: []
	};

	componentDidMount() {
		this.setState({
			dates: mockData.dates.map(date => {
				return {
					id: date.id,
					value: moment(date.value).format('MMMM Do')
				};
			})
		});
	}

	render() {
		const { dates } = this.state;
		const {
			selectedDay,
			selectedHour,
			changeSelectedDay,
			changeSelectedHour
		} = this.props;
		return (
			<div className="timePicker">
				<div className="timePicker__dayPicker">
					{/* {dates && dates.length > 0 && (
            <WheelPicker
              data={dates}
              onChange={(target) => changeSelectedDay(target)}
              height={150}
              width={100}
              titleText='Select Day'
              itemHeight={30}
              selectedID={selectedDay ? selectedDay.id : null}
              color='#ccc'
              activeColor='red'
              backgroundColor='yellow'
            />
          )} */}
				</div>
				<div className="timePicker__hoursPicker">
					{/* <WheelPicker
            data={mockData.hours}
            onChange={(target) => changeSelectedHour(target)}
            height={150}
            width={100}
            titleText='Select Hour'
            itemHeight={30}
            selectedID={selectedHour ? selectedHour.id : null}
            color='#ccc'
            activeColor='red'
            backgroundColor='yellow'
          /> */}
				</div>
			</div>
		);
	}
}
