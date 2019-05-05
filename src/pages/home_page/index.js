import { connect } from 'react-redux';

import * as geoSelectors from '../../store/selectors/geo';
import * as geoThunks from '../../store/thunks/geo';
import * as listingsSelectors from '../../store/selectors/listings';
import * as listingsThunks from '../../store/thunks/listings';

import HomePage from './HomePage';

const mapStateToProps = state => ({
  geoLocating: geoSelectors.getLocating(state),
  geoLocation: geoSelectors.getLocation(state),
  geoError: geoSelectors.getError(state),
  fetchingListings: listingsSelectors.getFetching(state),
  listingsLocation: listingsSelectors.getLocation(state),
  listingsRegions: listingsSelectors.getRegions(state),
  listingsError: listingsSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  geoLocate: () => geoThunks.fetchCoordinates()(dispatch),
  fetchListings: coords => listingsThunks.fetchListings(coords)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
