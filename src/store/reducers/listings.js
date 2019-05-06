import clone from 'lodash.clonedeep';
import set from 'lodash.set';

import * as types from '../../constants/actionTypes';

import { listingsPaths } from '../../constants/storePaths';

export const getInitialState = () => {
  const initialState = {};
  set(initialState, listingsPaths.fetching(), false);
  set(initialState, listingsPaths.location(), null);
  set(initialState, listingsPaths.regions(), null);
  set(initialState, listingsPaths.details(), {});
  set(initialState, listingsPaths.error(), null);
  return initialState;
};

/*
 * REQUEST_WEEDMAPS_LISTINGS
 */
export const requestWeedmapsListingsReducer = state => {
  const newState = clone(state);
  set(newState, listingsPaths.fetching(), true);
  return newState;
};

/*
 * RECEIVE_WEEDMAPS_LISTINGS
 */
export const receiveWeedmapsListingsReducer = (state, action) => {
  const newState = clone(state);
  set(newState, listingsPaths.fetching(), false);
  set(newState, listingsPaths.location(), action.payload.location);
  set(newState, listingsPaths.regions(), action.payload.regions);
  set(newState, listingsPaths.error(), null);
  return newState;
};

/*
 * REQUEST_WEEDMAPS_LISTINGS_ERROR
 */
export const requestWeedmapsListingsErrorReducer = (state, action) => {
  const newState = clone(state);
  set(newState, listingsPaths.fetching(), false);
  set(newState, listingsPaths.location(), null);
  set(newState, listingsPaths.regions(), null);
  set(newState, listingsPaths.error(), action.payload.error);
  return newState;
};

/*
 * REQUEST_WEEDMAPS_LISTING_DETAILS
 */
export const requestWeedmapsListingDetailsReducer = state => {
  const newState = clone(state);
  set(newState, listingsPaths.fetching(), true);
  return newState;
};

/*
 * RECEIVE_WEEDMAPS_LISTING_DETAILS
 */
export const receiveWeedmapsListingDetailsReducer = (state, action) => {
  const newState = clone(state);
  const { listing } = action.payload;
  set(newState, listingsPaths.fetching(), false);
  set(newState, listingsPaths.details(listing.wmid), listing);
  set(newState, listingsPaths.error(), null);
  return newState;
};

/*
 * REQUEST_WEEDMAPS_LISTING_DETAILS_ERROR
 */
export const requestWeedmapsListingDetailsErrorReducer = (state, action) => {
  const newState = clone(state);
  set(newState, listingsPaths.fetching(), false);
  set(newState, listingsPaths.error(), action.payload.error);
  return newState;
};

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case types.REQUEST_WEEDMAPS_LISTINGS: return requestWeedmapsListingsReducer(state);
    case types.RECEIVE_WEEDMAPS_LISTINGS: return receiveWeedmapsListingsReducer(state, action);
    case types.REQUEST_WEEDMAPS_LISTINGS_ERROR: return requestWeedmapsListingsErrorReducer(state, action);
    case types.REQUEST_WEEDMAPS_LISTING_DETAILS: return requestWeedmapsListingDetailsReducer(state);
    case types.RECEIVE_WEEDMAPS_LISTING_DETAILS: return receiveWeedmapsListingDetailsReducer(state, action);
    case types.REQUEST_WEEDMAPS_LISTING_DETAILS_ERROR: return requestWeedmapsListingDetailsErrorReducer(state, action);
    default: return state;
  }
};
