import React from 'react';
import Reservation from '../Reservation/Reservation'

const Container = ({reservations}) => {
  console.log('in container', reservations)
  let allReservations = reservations.map(reservation => {
    return <Reservation reservation={reservation} />
  })
  return (<section className="container">
    {allReservations}
  </section>)
}

export default Container