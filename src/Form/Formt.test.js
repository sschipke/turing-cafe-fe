import React from 'react';
import { shallow } from 'enzyme';
import Form from './Form'

describe('Form', () => {
  let wrapper;
  const mockAddReservation = jest.fn()
  beforeEach(() => {
    wrapper = shallow(<Form addReservation={mockAddReservation}/>)
  })
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})