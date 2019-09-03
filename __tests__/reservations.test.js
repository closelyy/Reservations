/* eslint-disable max-len */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
import { shallow, mount } from 'enzyme';
import 'jsdom-global/register';
import React from 'react';

import { Calendar, Month, GridContainer } from '../client/styled-components/Calendar';
import FindButton from '../client/styled-components/Buttons';
import Reservation from '../client/Reservation';
import Modal from '../client/styled-components/Modal';
import DropDown from '../client/styled-components/DropDowns';

const cd = require('../client/CalendarData/CalendarData');

describe('<Reservation />', () => {
  describe('Structure/Appearance', () => {
    const wrapper = shallow(<Reservation />);
    test('it should contain a Modal', () => {
      const ModalComponent = wrapper.find(Modal);
      expect(ModalComponent).toHaveLength(1);
    });

    test('it should contain two drop downs', () => {
      const DropDowns = wrapper.find('.dropDown');
      expect(DropDowns).toHaveLength(2);
    });

    test('it should contain a calendar input', () => {
      const input = wrapper.find('.calendar-input');
      expect(input).toHaveLength(1);
    });

    test('it should contain 9 drop down entries', () => {
      const entries = wrapper.find('.dropDown-entry');
      expect(entries).toHaveLength(9);
    });

    test('it should show calendar on click', () => {
      const input = wrapper.find('.calendar-input');
      input.simulate('click');
      const test = wrapper.find(Calendar);
      expect(test).toHaveLength(1);
    });

    xtest('it should open a calendar upon click', () => {
      const DropDowns = wrapper.find(DropDown);
      expect(DropDowns).toHaveLength(2);
    });
  });

  xdescribe('Functions', () => {
    const func = jest.fn();
    const wrapper = mount(<FindButton onClick={func} />);
    test('Find table button should be clickable', async () => {
      wrapper.find(FindButton).simulate('click');
      await expect(func).toHaveBeenCalled();
    });
  });
});

describe('<Calendar />', () => {
  const props = {
    handleCalendarButtonClick: jest.fn(),
    selectedMonth: '',
    changeMonthForward: jest.fn(),
    changeMonthBackward: jest.fn(),
  };
  describe('Structure/Appearance', () => {
    const wrapper = shallow(<Calendar handleCalendarButtonClick={props.handleCalendarButtonClick} selectedMonth={props.selectedMonth} changeMonthBackward={props.changeMonthBackward} changeMonthForward={props.changeMonthForward} />);
    test('it should contain a month container', () => {
      const Months = wrapper.find(Month);
      expect(Months).toHaveLength(1);
    });

    test('it should contain two grid containers', () => {
      const Grids = wrapper.find(GridContainer);
      expect(Grids).toHaveLength(2);
    });
  });
});

describe('Calendar Data Functions', () => {
  describe('translateMonth', () => {
    test('it should return a string', () => {
      const input = '2019-10-01';
      const translate = cd.default.translateMonth;
      expect(translate(input)).toBe('October');
    });
  });

  describe('getString', () => {
    test('it should return a string', () => {
      const input = '2019-9-2';
      const func = cd.default.getString;
      expect(func(input)).toBe('Mon, Sep 02');
    });
  });
});
