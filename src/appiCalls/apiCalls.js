export const getReservations = () => {
  return fetch('http://localhost:3001/api/v1/reservations')
    .then(res => {
      if(!res.ok) {
        throw Error('Unable to fetch reservations')
      }
      return res.json()})
    .catch(res => {
      console.log(res)
      return res
    })
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
    .then(res => {
      if (!res.ok) {
        throw Error('Unable to post new reservation')
      }
      return res.json()
    })
    .catch(res => {console.log(res)
    return res})
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
