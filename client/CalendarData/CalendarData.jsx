// Input Bar Data
const newDate = new Date();
let currentDay = newDate.toDateString();
currentDay = currentDay.replace(/2019/gi, '');
const splitDay = currentDay.split(' ');
currentDay = `${splitDay[0]}, ${splitDay[1]} ${splitDay[2]}`;

// Grid and Calendar Data
const availableTimes = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'];

const partySize = ['2 people', '3 people', '4 people', '5 people', '6 people', '7 people', '8 people'];

const dayAbbreviations = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

// Helper Functions to translate Date
const getMonth = (inputDate) => {
  if (inputDate === '8') {
    return 'September';
  } if (inputDate === '9') {
    return 'October';
  } if (inputDate === '10') {
    return 'November';
  }
  return inputDate;
};

const translateMonth = (dateString) => {
  const dateArr = dateString.split('-');
  const num = +dateArr[1] - 1;
  return getMonth(num.toString());
};

const translateDayOfWeek = (input) => {
  switch (input) {
    case 1:
      return 'Mon';
    case 2:
      return 'Tue';
    case 3:
      return 'Wed';
    case 4:
      return 'Thu';
    case 5:
      return 'Fri';
    case 6:
      return 'Sat';
    default:
      return 'Sun';
  }
};

const getString = (dateString) => {
  if (dateString === '2019-10-01') {
    return 'Tue, Oct 1';
  }
  if (dateString === '2019-11-01') {
    return 'Fri, Nov 1';
  }
  const date = new Date(dateString);
  const month = getMonth(date.getMonth().toString()).substring(0, 3);
  let dayOfWeek;
  let day;
  if (month === 'Sep') {
    dayOfWeek = translateDayOfWeek(date.getDay());
    day = (date.getDate());
  } else {
    dayOfWeek = translateDayOfWeek(date.getDay() + 1);
    day = (date.getDate() + 1);
  }
  if (day < 10) {
    return `${dayOfWeek}, ${month} 0${day}`;
  }
  return `${dayOfWeek}, ${month} ${day}`;
};

const September = [];
const SeptemberMonthValue = '2019-9-';
for (let i = 1; i <= 30; i += 1) {
  const SeptemberObj = {};
  let SeptemberDateTimeDayValue = '2019-9-';
  if (i === 1) {
    SeptemberObj.firstDay = '01';
  }
  if (i < 10) {
    SeptemberDateTimeDayValue += `0${i}`;
  } else {
    SeptemberDateTimeDayValue += `${i}`;
  }
  SeptemberObj.dateTimeDay = SeptemberDateTimeDayValue;
  SeptemberObj.day = i;
  September.push(SeptemberObj);
}

const October = [];
const OctoberMonthValue = '2019-10-';
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

const November = [];
const NovemberMonthValue = '2019-11-';
for (let i = 1; i <= 30; i += 1) {
  const NovemberObj = {};
  let NovemberDateTimeDayValue = '2019-11-';
  if (i === 1) {
    NovemberObj.firstDay = '01';
  }
  if (i < 10) {
    NovemberDateTimeDayValue += `0${i}`;
  } else {
    NovemberDateTimeDayValue += `${i}`;
  }
  NovemberObj.dateTimeDay = NovemberDateTimeDayValue;
  NovemberObj.day = i;
  November.push(NovemberObj);
}

export default {
  getString,
  translateMonth,
  getMonth,
  newDate,
  currentDay,
  dayAbbreviations,
  September,
  SeptemberMonthValue,
  OctoberMonthValue,
  October,
  November,
  NovemberMonthValue,
  availableTimes,
  partySize,
};
