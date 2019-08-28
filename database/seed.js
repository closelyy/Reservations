/* eslint-disable no-console */
const fakeData = require('./data.js');
const db = require('./index.js');

const data = new db.Reservation({
  restaurantId: 1,
  currentDate: Date.now(),
  maxPartySize: 8,
  reservations: fakeData.createData(),
});
data.save(((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log('Document successfully saved!');
  }
}));
