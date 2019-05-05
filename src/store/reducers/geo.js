import clone from 'lodash.clonedeep';
import set from 'lodash.set';

import {
  REQUEST_GEO_COORDS,
  RECEIVE_GEO_COORDS,
  REQUEST_GEO_COORDS_ERROR,
} from '../../constants/actionTypes';

import { geoPaths } from '../../constants/storePaths';

export const getInitialState = () => {
  const initialState = {};
  set(initialState, geoPaths.locating(), false);
  set(initialState, geoPaths.location(), null);
  set(initialState, geoPaths.error(), null);
  return initialState;
};

/*
 * REQUEST_GEO_COORDS
 */
export const requestGeoCoordsReducer = state => {
  const newState = clone(state);
  set(newState, geoPaths.locating(), true);
  return newState;
};

/*
 * RECEIVE_GEO_COORDS
 */
export const receiveGeoCoordsReducer = (state, action) => {
  const newState = clone(state);
  const { latitude, longitude } = action.payload;
  set(newState, geoPaths.locating(), false);
  set(newState, geoPaths.location(), { latitude, longitude });
  return newState;
};

/*
 * REQUEST_GEO_COORDS_ERROR
 */
export const requestGeoCoordsErrorReducer = (state, action) => {
  const newState = clone(state);
  const { error } = action.payload;
  set(newState, geoPaths.locating(), false);
  set(newState, geoPaths.error(), error);
  return newState;
};

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case REQUEST_GEO_COORDS: return requestGeoCoordsReducer(state, action);
    case RECEIVE_GEO_COORDS: return receiveGeoCoordsReducer(state, action);
    case REQUEST_GEO_COORDS_ERROR: return requestGeoCoordsErrorReducer(state, action);
    default: return state;
  }
};
