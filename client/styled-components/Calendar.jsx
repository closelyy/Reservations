/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

const cd = require('../CalendarData/CalendarData');

const CalendarContainer = styled.div`
  position: absolute;
  min-width: 25%;
  min-height: 20%;
  border: 2px solid #e6e6e6;
  border-radius: 2%;
`;

const Days = styled.div`
  font-family: Arial;
  color: #d32323;
  font-size: 70%;
`;

const SeptemberDayButton = styled.button`
  grid-column: 0;
  border: 0.5px solid #e6e6e6;
  background-color: transparent;
  position: relative;
`;

const OctoberDayButton = styled.button`
  grid-column: ${(props) => (props.index === 0 ? 3 : 'auto')};
  border: 0.5px solid #e6e6e6;
  background-color: transparent;
  position: relative;
`;

const NovemberDayButton = styled.button`
  grid-column: ${(props) => (props.index === 0 ? 6 : 'auto')};
  border: 0.5px solid #e6e6e6;
  background-color: transparent;
  position: relative;
`;

const MonthTime = styled.time`
  color: black;
  font-family: Arial;
  font-size: 100%;
`;

const WrapLeft = styled.div`
  visibility: ${(props) => (props.selectedMonth === 'September' ? 'hidden' : 'visible')};
  display: inline-flex;
  justify-content: flex-end;
`;

const WrapRight = styled.div`
  visibility: ${(props) => (props.selectedMonth === 'November' ? 'hidden' : 'visible')};
  display: inline-flex;
  justify-content: flex-end;
`;

const Month = styled.div`
  background: #fff;
  padding-top: 2%;
  text-align: center;
  padding-bottom: 1%;
  z-index: 10;
  font-size: 80%;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  z-index: 10;
  text-align: center;
  background-color: #fff;
  color: white;
`;

const RightArrow = styled.span`
  border-style: solid;
  color: #999;
  border-width: 2px 2px 0 0;
  height: 6px;
  position: relative;
  transform: rotate(45deg);
  vertical-align: top;
  width: 6px;
  float: right;
`;

const LeftArrow = styled.span`
  border-style: solid;
  color: #999;
  border-width: 2px 2px 0 0;
  height: 6px;
  position: relative;
  transform: rotate(-135deg);
  vertical-align: top;
  width: 6px;
  right: 20;
  top: 5;
  right: 0;
`;

const CalendarInput = styled.input`
  width: 95%;
  margin-bottom: 3%;
  background-color: white;
  border: 1px solid #999;
  border-radius: 2px;
`;

const Calendar = (props) => {
  const {
    dayAbbreviations, OctoberMonthValue, October, SeptemberMonthValue, September, NovemberMonthValue, November,
  } = cd.default;
  const { selectedMonth, changeMonthForward, changeMonthBackward } = props;

  const DayView = () => {
    if (selectedMonth === 'September') {
      return September.map((day, index) => (<SeptemberDayButton index={index} title={day.dateTimeDay} onClick={props.handleCalendarButtonClick} key={day.dateTimeDay}><time title={day.dateTimeDay} dateTime={day.day}>{day.day}</time></SeptemberDayButton>));
    }
    if (selectedMonth === 'October') {
      return October.map((day, index) => (<OctoberDayButton index={index} title={day.dateTimeDay} onClick={props.handleCalendarButtonClick} key={day.dateTimeDay}><time title={day.dateTimeDay} dateTime={day.day}>{day.day}</time></OctoberDayButton>));
    }
    return November.map((day, index) => (<NovemberDayButton index={index} title={day.dateTimeDay} onClick={props.handleCalendarButtonClick} key={day.dateTimeDay}><time title={day.dateTimeDay} dateTime={day.day}>{day.day}</time></NovemberDayButton>));
  };

  const MonthView = () => {
    if (selectedMonth === 'September') {
      return (<MonthTime dateTime={SeptemberMonthValue}>September 2019</MonthTime>);
    }
    if (selectedMonth === 'October') {
      return (<MonthTime dateTime={OctoberMonthValue}>October 2019</MonthTime>);
    }
    return (<MonthTime dateTime={NovemberMonthValue}>November 2019</MonthTime>);
  };
  return (
    <CalendarContainer>
      <Month>
        <WrapLeft selectedMonth={selectedMonth} onClick={changeMonthBackward}>
          <LeftArrow />
        </WrapLeft>
        {MonthView()}
        <WrapRight selectedMonth={selectedMonth} onClick={changeMonthForward}>
          <RightArrow />
        </WrapRight>
      </Month>
      <GridContainer>
        {dayAbbreviations.map((day) => <Days key={day}>{day}</Days>)}
      </GridContainer>
      <GridContainer>
        {DayView()}
      </GridContainer>
    </CalendarContainer>
  );
};

Calendar.propTypes = {
  handleCalendarButtonClick: PropTypes.func.isRequired,
  selectedMonth: PropTypes.string.isRequired,
  changeMonthForward: PropTypes.func.isRequired,
  changeMonthBackward: PropTypes.func.isRequired,
};

export {
  CalendarInput,
  Calendar,
  Month,
  GridContainer,
};
