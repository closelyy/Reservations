/* eslint-disable max-len */
/* eslint-disable no-console */
const mongoose = require('mongoose');

const db = mongoose.connection;
mongoose.connect('mongodb://localhost/reservations', { useNewUrlParser: true });

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('Connection established!');
});

const restaurantSchema = mongoose.Schema({
  restaurantId: { type: Number },
  currentDate: { type: Date, default: Date.now },
  maxPartySize: { type: Number },
  reservations: [
    {
      month: { type: String },
      days: { type: Number },
      dates: [
        {
          day: { type: Number },
          hours: [
            {
              month: { type: String },
              day: { type: Number },
              hour: { type: String },
              available: { type: Boolean },
            },
          ],
        },
      ],
    },
  ],
});

const Reservation = mongoose.model('Reservation', restaurantSchema);

module.exports.Reservation = Reservation;
