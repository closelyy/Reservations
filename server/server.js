/* eslint-disable array-callback-return */
/* eslint-disable no-console */
const express = require('express');

const bodyParser = require('body-parser');

const db = require('../database/index.js');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public'));

// Find all available reservations for a given business (currently a single business)
app.get('/api/reservations/', (req, res) => {
  db.Reservation.find((err, business) => {
    const openTimes = [];
    if (err) {
      console.log(err);
    } else {
      for (let i = 0; i < business[0].reservations.length; i += 1) {
        for (let j = 0; j < business[0].reservations[i].dates.length; j += 1) {
          for (let k = 0; k < business[0].reservations[i].dates[j].hours.length; k += 1) {
            if (business[0].reservations[i].dates[j].hours[k].available) {
              openTimes.push(business[0].reservations[i].dates[j].hours[k]);
            }
          }
        }
      }
    }
    res.send(openTimes).status(200);
  });
});

app.listen(port, () => console.log(`Listening on port ${port}!`));
