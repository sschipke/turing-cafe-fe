import React from 'react';
import Reservation from '../Reservation/Reservation'

const Container = ({reservations}) => {
  let allReservations = reservations.map(reservation => {
    return <Reservation key={reservation.id} reservation={reservation} />
  })
  return (<section className="container">
    {allReservations}
  </section>)
}

export default Container