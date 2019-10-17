export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(res => res.json())
}

export const postReservation = (newReservation) => {
  const options = {
    method: 'POST',
    body: JSON.stringify(newReservation),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch('http://localhost:3001/api/v1/reservations', options)
    .then(response => response.json())
}

export const deleteReservation = id => {
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  return fetch(`http://localhost:3001/api/v1/reservations/${id}`, options)
    .then(response => response.json())
}
