import React from 'react';
import './Reservation.css'

const Reservation = ({reservation, cancelReservation}) => {
  const {name, date, time, number, id} = reservation;
  return (
    <div className="reservation">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time} pm</p>
      <p>Number of Guests: {number}</p>
      <button id={id} onClick={cancelReservation} type="button">Cancel</button>
    </div>
  )
}

export default Reservation