import React from 'react';
import { shallow } from 'enzyme';
import Container from './Container'

describe('Container', () => {
  let wrapper, mockReservations;
  const mockCancelReservation = jest.fn();
  beforeEach(() => {
    mockReservations = [{
      id: 123,
      name: 'Kimberly',
      date: '10/25',
      time: '8:00',
      number: 6
    }]
    wrapper = shallow(
      <Container reservations={mockReservations} cancelReservation={mockCancelReservation} />
    )
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})