import React, { Component } from 'react';
import './App.css';
import Form from '../Form/Form';
import Container from '../Container/Container';


class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations:[]
    }
  }

  addReservation = (newReservation) => {
    this.setState({ reservations: [newReservation,...this.state.reservations]})
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
        <Form addReservation={this.addReservation}/>
        <Container reservations={reservations}/>
      </div>
    )
  }
}

export default App;
