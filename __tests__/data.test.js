/* eslint-disable no-undef */
const createData = require('../database/data.js');

describe('Data Generation', () => {
  test('reservations array should have a length greater than zero', () => {
    const reservations = createData.createData();
    expect(reservations.length).toBeGreaterThan(0);
  });

  test('reservations array should contain months September, October, November', () => {
    const reservations = createData.createData();
    expect(reservations[0].month).toBe('September');
    expect(reservations[1].month).toBe('October');
    expect(reservations[2].month).toBe('November');
  });
});
