import React from 'react';
import './Container.css'
import Reservation from '../Reservation/Reservation'

const Container = ({reservations, cancelReservation}) => {
  let allReservations = reservations.map(reservation => {
    return <Reservation key={reservation.id} reservation={reservation} cancelReservation={cancelReservation} />
  })
  return (<section className="container">
    {allReservations}
  </section>)
}

export default Container