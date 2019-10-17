import React from 'react';
import './Reservation.css'

const Reservation = ({reservation}) => {
  const {name, date, time, number} = reservation;
  return (
    <div className="reservation">
      <h2>{name}</h2>
      <p>{date}</p>
      <p>{time}</p>
      <p>{number}</p>
    </div>
  )
}

export default Reservation