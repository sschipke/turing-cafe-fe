import React from 'react';
import {getReservations} from './apiCalls';

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
})