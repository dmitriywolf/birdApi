import { setBirds, delBird, editBird, createBird } from "./actions";

export const getBirdsFetch = () => (dispatch) => {
  fetch( process.env.REACT_APP_API_KEY)
    .then(response => response.json())
    .then(birds => dispatch(setBirds(birds)))
};

export const addBirdFetch = (data) => (dispatch) => {
  fetch( process.env.REACT_APP_API_KEY, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(bird => dispatch(createBird(bird)))
};

export const deleteBirdFetch = (birdId) => (dispatch) => {
  fetch( `${process.env.REACT_APP_API_KEY}/${birdId}`, {
    method: 'DELETE',
  }).then(() => dispatch(delBird(birdId)))
};

export const editBirdFetch = (data, birdId) => (dispatch) =>{
  fetch( `${process.env.REACT_APP_API_KEY}/${birdId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then((bird) => dispatch(editBird(birdId, bird)))
};