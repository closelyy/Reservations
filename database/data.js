/* eslint-disable max-len */
/* eslint-disable no-console */

// Create data function
const createData = () => {
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

  // Open Reservation Hours For All Businesses
  const restaurantHours = ['5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM'];

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
  for (let i = 0; i < 400; i += 1) {
    const randomMonth = Math.floor(Math.random() * reservations.length);
    const randomDate = Math.floor(Math.random() * reservations[randomMonth].dates.length);
    const randomHour = Math.floor(Math.random() * reservations[randomMonth].dates[randomDate].hours.length);
    reservations[randomMonth].dates[randomDate].hours[randomHour].available = false;
  }
  return reservations;
};

module.exports.createData = createData;
