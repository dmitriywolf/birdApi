import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import {composeWithDevTools} from "redux-devtools-extension";
import {birdsReducer} from './birds/reducer';

const reducer = combineReducers({
  state: birdsReducer,
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));