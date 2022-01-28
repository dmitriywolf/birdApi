import { SET_BIRDS,  DEL_BIRD, EDIT_BIRD, CREATE_BIRD} from "./types";

const initialState = {
  birds: [],
};

export const birdsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_BIRDS:
      return {...state, birds: action.payload};
    case DEL_BIRD: 
      return {...state, birds: state.birds.filter(item => item.id !== action.payload)};
    case CREATE_BIRD: 
      return {...state, birds: state.birds.concat(action.payload)};
    case EDIT_BIRD: 
      const idx = state.birds.findIndex(item => item.id === action.payload.id);
      const newPrevState = state.birds.slice(0, idx);
      const newNextState = state.birds.slice(idx+1, state.birds.length)
      return {...state, birds: [...newPrevState, action.payload.data, ...newNextState]}
    default:
      return state;
  }
};

