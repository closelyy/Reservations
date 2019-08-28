/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
const chai = require('chai');

const Axios = require('axios');

const { expect } = chai;

const reservations = require('../database/data.js');

describe('Reservations array', () => {
  it('should have a length greater than 0', () => {
    expect(reservations).to.not.be.empty;
  });
});
