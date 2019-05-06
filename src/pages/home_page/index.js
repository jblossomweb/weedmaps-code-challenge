import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as geoSelectors from '../../store/selectors/geo';
import * as geoThunks from '../../store/thunks/geo';
import * as listingsSelectors from '../../store/selectors/listings';
import * as listingsThunks from '../../store/thunks/listings';

import HomePage from './HomePage';

class Container extends HomePage {
  componentWillReceiveProps(nextProps) {
    if (nextProps.geoLocating || nextProps.fetchingListings) {
      return;
    }
    const { geoLocation, fetchListings } = this.props;
    if (
      (!geoLocation && nextProps.geoLocation) ||
      (
        geoLocation &&
        nextProps.geoLocation &&
        (
          nextProps.geoLocation.latitude !== geoLocation.latitude ||
          nextProps.geoLocation.longitude !== geoLocation.longitude
        )
      )
    ) {
      fetchListings(nextProps.geoLocation);
    }
  }
}

Container.propTypes = {
  ...HomePage.propTypes,
  fetchListings: PropTypes.func.isRequired,
};

export const mapStateToProps = state => ({
  geoLocating: geoSelectors.getLocating(state),
  geoLocation: geoSelectors.getLocation(state),
  geoError: geoSelectors.getError(state),
  fetchingListings: listingsSelectors.getFetching(state),
  listingsLocation: listingsSelectors.getLocation(state),
  listingsRegions: listingsSelectors.getRegions(state),
  listingsError: listingsSelectors.getError(state),
});

export const mapDispatchToProps = dispatch => ({
  geoLocate: () => geoThunks.fetchCoordinates()(dispatch),
  fetchListings: coords => listingsThunks.fetchListings(coords)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
