import { setBirds, delBird, editBird, createBird } from "./actions";

export const getBirdsFetch = () => (dispatch) => {
  fetch( `${process.env.REACT_APP_API_KEY}/birds`)
    .then(response => response.json())
    .then(data => dispatch(setBirds(data.data.birds)))
};

export const addBirdFetch = (data) => (dispatch) => {
  fetch( `${process.env.REACT_APP_API_KEY}/birds`, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => dispatch(createBird(data.data.bird)))
};

export const deleteBirdFetch = (birdId) => (dispatch) => {
  fetch( `${process.env.REACT_APP_API_KEY}/birds/${birdId}`, {
    method: 'DELETE',
  }).then(() => dispatch(delBird(birdId)))
};

export const editBirdFetch = (data, birdId) => (dispatch) =>{
  fetch( `${process.env.REACT_APP_API_KEY}/birds/${birdId}`, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then((data) => {
    console.log(birdId, data)
    dispatch(editBird(birdId, data.data.bird))
  })
};