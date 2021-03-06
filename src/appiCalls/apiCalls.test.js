import React from 'react';
import {getReservations, postReservation} from './apiCalls';

describe('getReservtions', () => {
  let mockResponse = [{
    id: 123,
    name: 'Kimberly',
    date: '10/25',
    time: '8:00',
    number: 6
  }]
  beforeEach(() => {
    window.fetch =  jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockResponse)
      })
    })
  })
  it('should call fetch with the correct url', () => {
    getReservations()
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations')
  })
  it('should return an array of reservations (HAPPY)', () => {
    getReservations()
    .then(results => expect(results).toEqual(mockResponse))
  })
  it('should throw an error if something goes wrong (SAD)', () => {
    window.fetch =  jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok:false
      })
    })
    expect(getReservations()).rejects.toEqual(Error('Unable to fetch reservations'))
  })
})

describe('postReveration', () => {
  let mockRes = {
    id: 123,
    name: 'Kimberly',
    date: '10/25',
    time: '8:00',
    number: 6
  }
  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockRes)
      })
    })
  })
  it('should call fetch with the correct url', () => {
    getReservations()
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/reservations')
  })
  it('should return an array of reservations (HAPPY)', () => {
    getReservations()
      .then(results => expect(results).toEqual(mockRes))
  })
  it('should throw an error if something goes wrong (SAD)', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    expect(getReservations()).rejects.toEqual(Error('Unable to fetch post new reservation'))
  })
})