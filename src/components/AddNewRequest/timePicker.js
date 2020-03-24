import React, { Component } from 'react';
import 'date-fns';
import { withStyles } from '@material-ui/core/styles';
import DateFnsUtils from '@date-io/date-fns';
import {
	MuiPickersUtilsProvider,
	KeyboardTimePicker,
	KeyboardDatePicker
} from '@material-ui/pickers';
import styles from '../../styles/components/AddNewRequest/timePicker'

class TimerPicker extends Component {
	state = {
		dates: []
	};

	render() {
    const {
      classes,
			selectedDay,
			selectedHour,
			changeSelectedDay,
			changeSelectedHour
		} = this.props;
		return (
			<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<div className={classes.Pickers}>
					<div className={classes.DatePicker}>
						<KeyboardDatePicker
							margin="normal"
							label="Select a Date"
							format="MM/dd/yyyy"
							value={selectedDay}
							onChange={changeSelectedDay}
							KeyboardButtonProps={{
								'aria-label': 'change date'
							}}
						/>
					</div>
          <div className={classes.timePicker}>
						<KeyboardTimePicker
							margin="normal"
							label="Time picker"
							value={selectedHour}
							onChange={changeSelectedHour}
							KeyboardButtonProps={{
								'aria-label': 'change time'
              }}
						/>
					</div>
				</div>
			</MuiPickersUtilsProvider>
		);
	}
}
export default withStyles(styles)(TimerPicker);