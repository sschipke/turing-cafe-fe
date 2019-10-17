import React, {Component} from 'react';
import './Form.css'

class Form extends Component {
  constructor() {
    super()
    this.state = {
      name:'',
      date:'',
      time:'',
      number:''
    }
  }

  handleChange = (e) => {
    this.setState({[e.target.id]:e.target.value})
  }

  handleSubmit = () => {
    let newReservation = {
      name: this.state.name,
      date: this.state.date,
      time: this.state.time,
      number: this.state.number,
      id: Date.now()
    }
    this.props.addReservation(newReservation)
    this.setState({
      name: '',date: '',time: '', number: ''
    })
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.handleChange} value={this.state.name} id="name" placeholder="Name" />
        <input type="text" onChange={this.handleChange} value={this.state.date} id="date" placeholder="Date (mm/dd)" />
        <input type="text" onChange={this.handleChange} value={this.state.time} id="time" placeholder="Time" />
        <input type="number" onChange={this.handleChange} value={this.state.number} id="number" placeholder="Number of guests" />
        <button type="button" onClick={this.handleSubmit}>Make Reservation</button>
      </form>)
  }
}

export default Form