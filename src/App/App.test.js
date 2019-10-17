import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(
      <App />
    )
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should add a new reservation', () => {
    let mockReservation = {
      id: 123,
      name: 'Kimberly',
      date: '10/25',
      time: '8:00',
      number: 6
    }
    expect(wrapper.state('reservations')).toEqual([]);
    wrapper.instance().addReservation(mockReservation);
    expect(wrapper.state('reservations')).toEqual([mockReservation])
  })
})
