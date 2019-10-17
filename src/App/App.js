import React, { Component } from 'react';
import './App.css';
import {getReservations, postReservation, deleteReservation} from  '../apiCalls'
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
    postReservation(newReservation)
    .catch(err => console.log(err))
    this.setState({ reservations: [newReservation,...this.state.reservations]})
  }

  cancelReservation = (e) => {
    let id = parseInt(e.target.id);
    let filteredReservations =  this.state.reservations.filter( res => res.id !== id);
    this.setState({reservations: filteredReservations})
    deleteReservation(id)
    .catch(err => console.log(err))
  }

  componentDidMount() {
    getReservations()
    .then(data => this.setState({reservations: data}))
    .catch(err => console.log(err))
  }
  render() {
    const {reservations} = this.state
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <Form addReservation={this.addReservation}/>
        <Container cancelReservation={this.cancelReservation} reservations={reservations}/>
      </div>
    )
  }
}

export default App;
