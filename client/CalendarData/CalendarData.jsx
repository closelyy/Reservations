// Input Bar Data
const newDate = new Date();
let currentDay = newDate.toDateString();
currentDay = currentDay.replace(/2019/gi, '');

// Grid and Calendar Data
const availableTimes = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'];

const partySize = ['2 people', '3 people', '4 people', '5 people', '6 people', '7 people', '8 people'];

const dayAbbreviations = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const SeptemberDays = [];
for (let i = 1; i <= 30; i += 1) {
  SeptemberDays.push(i);
}

const October = [];
const OctoberMonthValue = '2019-10';
for (let i = 1; i <= 31; i += 1) {
  const OctoberObj = {};
  let OctoberDateTimeDayValue = '2019-10-';
  if (i === 1) {
    OctoberObj.firstDay = '01';
  }
  if (i < 10) {
    OctoberDateTimeDayValue += `0${i}`;
  } else {
    OctoberDateTimeDayValue += `${i}`;
  }
  OctoberObj.dateTimeDay = OctoberDateTimeDayValue;
  OctoberObj.day = i;
  October.push(OctoberObj);
}

const NovemberDays = [];
for (let i = 1; i <= 30; i += 1) {
  NovemberDays.push(i);
}

export default {
  currentDay,
  OctoberMonthValue,
  dayAbbreviations,
  October,
  availableTimes,
  partySize,
};
