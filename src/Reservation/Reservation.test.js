import React from 'react';
import { shallow } from 'enzyme';
import Reservation from './Reservation'

describe('reservation', () => {
  let wrapper, mockReservation;
  const mockCancelReservation = jest.fn();
  beforeEach(() =>{
    mockReservation = {
      id: 123,
      name: 'Kimberly',
      date: '10/25',
      time: '8:00',
      number: 6
    }
    wrapper =  shallow(
      <Reservation reservation={mockReservation} cancelReservation={mockCancelReservation}/>
    )
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
  it('should call cancelReservation when the button is clicked', () => {
    let mockEvent = {target: {id: 123}}
    wrapper.find('button').simulate('click', mockEvent);
    expect(mockCancelReservation).toHaveBeenCalledWith(mockEvent)
  })
})