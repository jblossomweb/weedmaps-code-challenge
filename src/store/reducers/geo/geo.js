import clone from 'lodash.clonedeep';
import set from 'lodash.set';
import { geoPaths } from '../../../constants/storePaths';

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
