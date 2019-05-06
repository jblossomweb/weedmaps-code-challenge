import { createSelector } from 'reselect';
import get from 'lodash.get';
import { listingsPaths } from '../../constants/storePaths';

export const getScopedState = state => get(state, ['listings']);
const echo = selected => selected;

/*
 * getFetching
 */
const getFetchingSelector = state => get(
  getScopedState(state),
  listingsPaths.fetching(),
  false,
);
export const getFetching = createSelector([getFetchingSelector], echo);

/*
 * getLocation
 */
const getLocationSelector = state => get(
  getScopedState(state),
  listingsPaths.location(),
  null,
);
export const getLocation = createSelector([getLocationSelector], echo);

/*
 * getRegions
 */
const getRegionsSelector = state => get(
  getScopedState(state),
  listingsPaths.regions(),
  null,
);
export const getRegions = createSelector([getRegionsSelector], echo);

/*
 * getListingDetails
 */
const getListingDetailsSelector = (state, listingId) => get(
  getScopedState(state),
  listingsPaths.details(listingId),
  null,
);
export const getListingDetails = createSelector([getListingDetailsSelector], echo);

/*
 * getError
 */
const getErrorSelector = state => get(
  getScopedState(state),
  listingsPaths.error(),
  null,
);
export const getError = createSelector([getErrorSelector], echo);
