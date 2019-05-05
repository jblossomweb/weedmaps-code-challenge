import * as types from '../../constants/actionTypes';

export const requestCoordinatesAction = () => ({
  type: types.REQUEST_GEO_COORDS,
});

export const receiveCoordinatesAction = coords => ({
  type: types.RECEIVE_GEO_COORDS,
  payload: {
    latitude: coords.latitude,
    longitude: coords.longitude,
  },
});

export const requestCoordinatesErrorAction = error => ({
  type: types.REQUEST_GEO_COORDS_ERROR,
  payload: {
    error,
    message: 'Oops something went wrong',
  },
});
