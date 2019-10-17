import React, { Component } from 'react';
import './App.css';
import Container from '../Container/Container'

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations:[]
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
    .then(data => this.setState({reservations: data}))
  }
  render() {
    const {reservations} = this.state
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <Container reservations={reservations}/>
      </div>
    )
  }
}

export default App;
