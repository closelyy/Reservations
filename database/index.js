/* eslint-disable no-console */
const mongoose = require('mongoose');

const db = mongoose.connection;
mongoose.connect('mongodb://localhost/reservations', { useNewUrlParser: true });

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Connection established!');
});

const reservations = [];
const hours = [];
const months = [
  { month: 'January', days: 31 },
  { month: 'February', days: 28 },
  { month: 'March', days: 31 },
  { month: 'April', days: 30 },
  { month: 'May', days: 31 },
  { month: 'June', days: 30 },
  { month: 'July', days: 31 },
  { month: 'August', days: 31 },
  { month: 'September', days: 30 },
  { month: 'October', days: 31 },
  { month: 'November', days: 30 },
  { month: 'December', days: 31 },
];
// restaurant hours set as 10am to 10pm
for (let j = 10; j <= 22; j += 1) {
  hours.push({
    hour: j,
    available: true,
  });
}
for (let i = 0; i < months.length; i += 1) {
  const dates = [];
  for (let j = 1; j <= months[i].days; j += 1) {
    dates.push({ day: j, hours });
  }
  months[i].dates = dates;
}
for (let i = 0; i < months.length; i += 1) {
  reservations.push(months[i]);
}


const reservationSchema = mongoose.Schema({
  restaurantId: { type: Number, unique: true },
  currentDate: { type: Date, default: Date.now },
  reservations,
});
