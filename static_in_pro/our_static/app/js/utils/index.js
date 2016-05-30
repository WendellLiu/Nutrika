import fetch from 'isomorphic-fetch'

export const fetchJSON = (url, method='GET', json) => {
  let options = {
    method,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  }
  return fetch(url, options)
    .then(response => response.json())
}
