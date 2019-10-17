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
  it('should update its state if there is a change', () => {
    let mockEvent = {target:{id:"name", value:'Greg'}};
    expect(wrapper.state('name')).toEqual('');
    wrapper.find('#name').simulate('change', mockEvent);
    expect(wrapper.state('name')).toEqual('Greg')
  })
  it('should reset its state when handleSubmit is called', () => {
    wrapper.instance().setState({name:'Greg', date:'10/20', time:'7:00'});
    wrapper.find('button').simulate('click');
    expect(wrapper.state('name')).toEqual('')
    expect(wrapper.state('date')).toEqual('')
    expect(wrapper.state('time')).toEqual('')
  })
})