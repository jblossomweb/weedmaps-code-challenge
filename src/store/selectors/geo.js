import { createSelector } from 'reselect';
import get from 'lodash.get';
import { geoPaths } from '../../constants/storePaths';

export const getScopedState = state => get(state, ['geo']);
const echo = selected => selected;

/*
 * getLocating
 */
const getLocatingSelector = state => get(
  getScopedState(state),
  geoPaths.locating(),
  false,
);
export const getLocating = createSelector([getLocatingSelector], echo);

/*
 * getLocation
 */
const getLocationSelector = state => get(
  getScopedState(state),
  geoPaths.location(),
  null,
);
export const getLocation = createSelector([getLocationSelector], echo);

/*
 * getError
 */
const getErrorSelector = state => get(
  getScopedState(state),
  geoPaths.error(),
  null,
);
export const getError = createSelector([getErrorSelector], echo);
