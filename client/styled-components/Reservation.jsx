/* eslint-disable max-len */
import React from 'react';
import { FindButton, DayButton } from './Button';
import Title from './Title';
import { DropDown, DropDownEntry } from './DropDown';
import CalendarInput from './CalendarInput';
import {
  ComponentContainer, CalendarContainer, Days, Month, GridContainer,
} from './Divs';

const cd = require('../CalendarData/CalendarData').default;

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      calendarHidden: true,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const { calendarHidden } = this.state;
    this.setState({
      calendarHidden: !calendarHidden,
    });
  }

  render() {
    const { calendarHidden } = this.state;

    return (
      <ComponentContainer>
        <Title>Make a Reservation</Title>
        <CalendarInput
          type="text"
          onClick={this.handleClick}
          value={cd.currentDay}
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
                {cd.October.map((day) => <DayButton key={day.dateTimeDay}><time dateTime={day.dateTimeDay}>{day.day}</time></DayButton>)}
              </GridContainer>
            </CalendarContainer>
          )}
        <DropDown>
          {cd.availableTimes.map((time) => <DropDownEntry key={time}>{time}</DropDownEntry>)}
        </DropDown>
        &nbsp;
        <DropDown>
          {cd.partySize.map((size) => <DropDownEntry key={size}>{size}</DropDownEntry>)}
        </DropDown>
        <FindButton>Find a Table</FindButton>
      </ComponentContainer>
    );
  }
}

export default Reservation;
