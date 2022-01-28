import { SET_BIRDS,  DEL_BIRD, EDIT_BIRD, CREATE_BIRD} from "./types";

export const setBirds = (birds) => ({
  type: SET_BIRDS,
  payload: birds
});

export const delBird = (birdId) => ({
  type: DEL_BIRD,
  payload: birdId
})

export const editBird = (id, data) => ({
  type: EDIT_BIRD,
  payload: {id, data}
})

export const createBird = (bird) => ({
  type: CREATE_BIRD,
  payload: bird
})