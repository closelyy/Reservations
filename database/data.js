/* eslint-disable max-len */
/* eslint-disable no-console */
const db = require('./index.js');

// Creating reservations array
const reservations = [];

// Three months of sample data
const months = [
  { month: 'September', days: 30 },
  { month: 'October', days: 31 },
  { month: 'November', days: 30 },
];

// Pushing each month object into reservations array
for (let i = 0; i < months.length; i += 1) {
  reservations.push(months[i]);
}

// Restaurant hours set as 10am to 10pm
const restaurantHours = ['10', '10:30', '11', '11:30', '12', '12:30', '13', '13:30', '14', '14:30', '15', '15:30', '16', '16:30', '17', '17:30', '18', '18:30', '19', '19:30', '20', '20:30', '21', '21:30', '22', '22:30'];

// Creating dates and hours properties to add to each month object
for (let i = 0; i < months.length; i += 1) {
  const dates = [];
  for (let j = 1; j <= months[i].days; j += 1) {
    const hours = [];
    for (let k = 0; k < restaurantHours.length; k += 1) {
      hours.push({
        month: months[i].month,
        day: j,
        hour: restaurantHours[k],
        available: true,
      });
    }
    dates.push({ day: j, hours });
  }
  months[i].dates = dates;
}

// Randomize available times that can be reserved
for (let i = 0; i < 2000; i += 1) {
  const randomMonth = Math.floor(Math.random() * reservations.length);
  const randomDate = Math.floor(Math.random() * reservations[randomMonth].dates.length);
  const randomHour = Math.floor(Math.random() * reservations[randomMonth].dates[randomDate].hours.length);
  reservations[randomMonth].dates[randomDate].hours[randomHour].available = false;
}

// Create new instance of collection and save to db
const data = new db.Reservation({
  restaurantId: 1,
  currentDate: Date.now(),
  maxPartySize: 8,
  reservations,
});
data.save(((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Document successfully saved!');
  }
}));

module.exports = reservations;
