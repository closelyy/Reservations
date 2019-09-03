/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import Axios from 'axios';

import Modal from './styled-components/Modal';
import FindTableButton from './styled-components/Buttons';
import Title from './styled-components/Title';
import { DropDown, DropDownEntry } from './styled-components/DropDowns';
import {
  CalendarInput, Calendar,
} from './styled-components/Calendar';
import ComponentContainer from './styled-components/Divs';

const cd = require('./CalendarData/CalendarData').default;

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarHidden: true,
      showModal: false,
      selectedDay: cd.newDate.getDate().toString(),
      selectedDate: null,
      selectedMonth: cd.getMonth(cd.newDate.getMonth().toString()),
      openTimes: [],
    };

    this.changeMonthBackward = this.changeMonthBackward.bind(this);
    this.changeMonthForward = this.changeMonthForward.bind(this);
    this.hideModal = this.hideModal.bind(this);
    this.findTable = this.findTable.bind(this);
    this.handleCalendarButtonClick = this.handleCalendarButtonClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  changeMonthForward() {
    const { selectedMonth } = this.state;
    if (selectedMonth === 'September') {
      this.setState({
        selectedMonth: 'October',
      });
    }
    if (selectedMonth === 'October') {
      this.setState({
        selectedMonth: 'November',
      });
    }
  }

  changeMonthBackward() {
    const { selectedMonth } = this.state;
    if (selectedMonth === 'November') {
      this.setState({
        selectedMonth: 'October',
      });
    }
    if (selectedMonth === 'October') {
      this.setState({
        selectedMonth: 'September',
      });
    }
  }

  hideModal() {
    this.setState({
      showModal: false,
    });
  }

  findTable() {
    const openTimes = [];
    const { selectedDay, selectedMonth } = this.state;
    Axios.get('/api/reservations/')
      .then((response) => {
        response.data.forEach((dataPoint) => {
          if (dataPoint.month === selectedMonth && dataPoint.day === +selectedDay) {
            openTimes.push(dataPoint.hour);
          }
        });
      })
      .then(() => {
        this.setState({
          openTimes,
          showModal: true,
        });
      })
      .catch(console.log);
  }

  handleCalendarButtonClick(e) {
    const { calendarHidden } = this.state;
    this.setState({
      selectedDay: e.target.innerText,
      calendarHidden: !calendarHidden,
      selectedDate: cd.getString(e.target.title),
      selectedMonth: cd.translateMonth(e.target.title),
    });
  }

  handleClick() {
    const { calendarHidden } = this.state;
    this.setState({
      calendarHidden: !calendarHidden,
    });
  }

  render() {
    const {
      calendarHidden, selectedDate, showModal, openTimes, selectedMonth,
    } = this.state;
    return (
      <ComponentContainer>
        <Modal
          openTimes={openTimes}
          showModal={showModal}
          hideModal={this.hideModal}
          selectedDate={selectedDate}
        />
        <Title>Make a Reservation</Title>
        <CalendarInput
          className="calendar-input"
          type="text"
          onClick={this.handleClick}
          value={selectedDate || cd.currentDay}
          readOnly
        />
        {calendarHidden ? <br />
          : (
            <Calendar
              selectedMonth={selectedMonth}
              handleCalendarButtonClick={this.handleCalendarButtonClick}
              changeMonthForward={this.changeMonthForward}
              changeMonthBackward={this.changeMonthBackward}
            />
          )}
        <DropDown className="dropDown">
          {cd.availableTimes.map((time) => <DropDownEntry className="dropDown-entry" key={time}>{time}</DropDownEntry>)}
        </DropDown>
        &nbsp;
        <DropDown className="dropDown">
          {cd.partySize.map((size) => <DropDownEntry key={size}>{size}</DropDownEntry>)}
        </DropDown>
        <FindTableButton onClick={this.findTable}>Find a Table</FindTableButton>
      </ComponentContainer>
    );
  }
}

export default Reservation;
