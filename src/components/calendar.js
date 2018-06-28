import React, { Component } from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchEvents, triggerModal, selectDate } from '../store';
import { Day } from '../components';

class Calendar extends Component {

  componentDidMount() {
    this.props.loadEvents();
  }

  handleClick = (evt, day) => {
    this.props.selectDate(`${moment().format('MM')}/${day}/${moment().format('YYYY')}`);
    triggerModal(`${moment().format('MM')}/${day}/${moment().format('YYYY')}`);

  }

  render() {
    console.log(this.props)
    const { today } = this.props;
    let year = () => today.format('Y'),
      month = () => today.format('MMMM'),
      currentDay = () => today.get('D'),
      daysInMonth = () => today.daysInMonth(),
      firstOfMonth = () => moment(today).startOf('month').format('d'),
      weekdays = moment.weekdaysShort(),
      blankDates = [],
      monthDates = [];

    for (let i = 0; i < firstOfMonth(); i++) {
      blankDates.push(
        <td key={i * 10} className="blank-dates">
          {''}
        </td>
      );
    }

    for (let day = 1; day <= daysInMonth(); day++) {
      let className = day === currentDay() ? 'day current-day' : 'day';

      monthDates.push(
        <td key={day} className={className} onClick={evt => this.handleClick(evt, day)}>
          <div>{day}</div>
        </td>
      );
    }

    let fullMonth = [...blankDates, ...monthDates],
      weeks = [],
      days = [];

    fullMonth.forEach((date, idx) => {
      if ((idx + 1) % 7) days.push(date);
      else {
        days.push(date);
        weeks.push(days);
        days = [];
      }

      if (idx === fullMonth.length - 1) weeks.push(days);
    });

    let allDays = weeks.map((val, idx) => {
      return (
        <tr key={idx * 5}>
          {val}
        </tr>
      );
    });

    return (
      <div>
        <h1 className="month-name">{month()} {year()}</h1>
        <div className="calendar-cont">
          <table className="calendar">
            <thead>
            </thead>
            <tbody>
              <tr className="weekdays">
                {
                  weekdays.map(day => {
                    return (
                      <td key={day} className="weekday">{day}</td>
                    )
                  })
                }
              </tr>
              {allDays}
            </tbody>
          </table>
          <Day />
        </div>
      </div>
    )
  }
}

const mapState = state => ({
  today: moment(),
  dateSelected: ''
});

const mapDispatch = dispatch => ({
  loadEvents: () => dispatch(fetchEvents()),
  selectDate: date => dispatch(selectDate(date))
});

export default connect(mapState, mapDispatch)(Calendar);