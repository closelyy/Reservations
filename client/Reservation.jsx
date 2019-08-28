import React from 'react';
import Calendar from './Calendar';
import TimeSelector from './TimeSelector';
import GroupSizeSelector from './GroupSizeSelector';

const Reservation = () => (
  <div className="reservation-container">
    <h2>Make a Reservation</h2>
    <Calendar />
    <TimeSelector />
    <GroupSizeSelector />
  </div>
);

export default Reservation;
