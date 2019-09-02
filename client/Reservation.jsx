/* eslint-disable max-len */
/* eslint-disable no-console */
import React from 'react';
import Axios from 'axios';
import Modal from './styled-components/Modal';
import { FindButton, DayButton } from './styled-components/Buttons';
import Title from './styled-components/Title';
import { DropDown, DropDownEntry } from './styled-components/DropDowns';
import CalendarInput from './styled-components/CalendarInput';
import {
  ComponentContainer, CalendarContainer, Days, Month, GridContainer,
} from './styled-components/Divs';

const cd = require('./CalendarData/CalendarData').default;

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarHidden: true,
      showModal: false,
      selectedTime: cd.availableTimes[0],
      selectedPartySize: cd.partySize[0],
      selectedDay: cd.newDate.getDay().toString(),
      selectedDate: null,
      selectedMonth: cd.getMonth(cd.newDate.getMonth().toString()),
      openTimes: [],
    };

    this.hideModal = this.hideModal.bind(this);
    this.findTable = this.findTable.bind(this);
    this.changeParty = this.changeParty.bind(this);
    this.changeTime = this.changeTime.bind(this);
    this.handleCalendarButtonClick = this.handleCalendarButtonClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
        console.log(response);
        response.data.forEach((dataPoint) => {
          if (dataPoint.month === selectedMonth && dataPoint.day === selectedDay) {
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

  changeParty(e) {
    this.setState({
      selectedPartySize: e.target.value,
    });
  }

  changeTime(e) {
    this.setState({
      selectedTime: e.target.value,
    });
  }

  handleCalendarButtonClick(e) {
    const { calendarHidden } = this.state;
    this.setState({
      selectedDay: e.target.innerText,
      calendarHidden: !calendarHidden,
      selectedDate: e.target.title,
    });
  }

  handleClick() {
    const { calendarHidden } = this.state;
    this.setState({
      calendarHidden: !calendarHidden,
    });
  }

  render() {
    const { calendarHidden, selectedDate, showModal } = this.state;
    console.log(this.state);
    return (
      <ComponentContainer>
        <Modal showModal={showModal} hideModal={this.hideModal} />
        <Title>Make a Reservation</Title>
        <CalendarInput
          type="text"
          onClick={this.handleClick}
          value={selectedDate || cd.currentDay}
          readOnly
        />
        {calendarHidden ? <br />
          : (
            <CalendarContainer>
              <Month>
                <time dateTime={cd.OctoberMonthValue}>October 2019</time>
              </Month>
              <GridContainer>
                {cd.dayAbbreviations.map((day) => <Days key={day}>{day}</Days>)}
              </GridContainer>
              <GridContainer>
                {cd.October.map((day, index) => (<DayButton index={index} title={day.dateTimeDay} onClick={this.handleCalendarButtonClick} key={day.dateTimeDay}><time title={day.dateTimeDay} dateTime={day.day}>{day.day}</time></DayButton>))}
              </GridContainer>
            </CalendarContainer>
          )}
        <DropDown onChange={this.changeTime}>
          {cd.availableTimes.map((time) => <DropDownEntry key={time}>{time}</DropDownEntry>)}
        </DropDown>
        &nbsp;
        <DropDown onChange={this.changeParty}>
          {cd.partySize.map((size) => <DropDownEntry key={size}>{size}</DropDownEntry>)}
        </DropDown>
        <FindButton onClick={this.findTable}>Find a Table</FindButton>
      </ComponentContainer>
    );
  }
}

export default Reservation;
