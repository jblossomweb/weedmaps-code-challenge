import * as types from '../../constants/actionTypes';

export const requestListingsAction = coords => ({
  type: types.REQUEST_WEEDMAPS_LISTINGS,
  payload: {
    coords,
  },
});

export const receiveListingsAction = response => ({
  type: types.RECEIVE_WEEDMAPS_LISTINGS,
  payload: {
    location: response.data.location,
    regions: response.data.regions,
  },
});

export const requestListingsErrorAction = e => ({
  type: types.REQUEST_WEEDMAPS_LISTINGS_ERROR,
  payload: {
    error: e,
    message: 'Oops something went wrong',
  },
});
