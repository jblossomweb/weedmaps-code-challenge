import { combineReducers } from 'redux';

import geo from './geo';
import listings from './listings';

const rootReducer = combineReducers({
  geo,
  listings,
});

export default rootReducer;
