import React from 'react';

const Calendar = () => (
  <div className="calendar">
    <div className="month-indicator">Month</div>
    <div className="day-of-week">
      <div>Su</div>
      <div>Mo</div>
      <div>Tu</div>
      <div>We</div>
      <div>Th</div>
      <div>Fr</div>
      <div>Sa</div>
    </div>
    <div className="date-grid">
      <button type="button"><time dateTime="2019-09-01">1</time></button>
      <button type="button"><time dateTime="2019-09-02">2</time></button>
      <button type="button"><time dateTime="2019-09-03">3</time></button>
    </div>
  </div>
);

export default Calendar;
