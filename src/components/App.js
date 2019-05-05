import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as geoSelectors from '../store/selectors/geo';
import * as geoThunks from '../store/thunks/geo';

import * as listingsSelectors from '../store/selectors/listings';
import * as listingsThunks from '../store/thunks/listings';

import AppHeader from './app_header';
import HeroSection from './hero_section';
import Listings from './listings';

import {
  AppWrapper,
  AppContent,
} from './styles';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loadingTimer: 0,
    };
  }

  render() {
    const {
      geoLocate, geoLocating, geoLocation, geoError,
      fetchListings, fetchingListings, listingsLocation, listingsRegions, listingsError,
    } = this.props;
    // const thunking = geoLocating || fetchingListings;
    const error = geoError || listingsError;
    return (
      <React.Fragment>
        <AppHeader />
        <AppWrapper>
          <HeroSection
            geoLocate={geoLocate}
            geoLocating={geoLocating}
            geoLocation={geoLocation}
            fetchListings={fetchListings}
            fetchingListings={fetchingListings}
            listingsLocation={listingsLocation}
          />
          <AppContent>
            {error && <div> {error.message} </div>}
            {listingsLocation && listingsRegions && (
              <Listings
                location={listingsLocation}
                regions={listingsRegions}
              />
            ) }
          </AppContent>
        </AppWrapper>
      </React.Fragment>
    );
  }
}

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

// App.propTypes = {
//   fetchingLocations: PropTypes.bool.isRequired,
//   location: PropTypes.object,
//   regions: PropTypes.object,
//   dispatch: PropTypes.any, // TODO: fix this.
//   error: PropTypes.object,
// };

// App.defaultProps = {
//   fetchingLocations: false,
//   location: {},
//   regions: {},
//   error: {},
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
