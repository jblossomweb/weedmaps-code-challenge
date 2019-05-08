import React from 'react';
import PropTypes from 'prop-types';

import HeroSection from '../../components/hero_section';
import Listings from '../../components/listings';
import LoadingBars from '../../components/loading_bars';

import {
  Wrapper,
  Content,
} from './styles';

class HomePage extends React.Component {
  render() {
    const {
      geoLocate, geoLocating, geoLocation, geoError,
      fetchingListings, listingsLocation, listingsRegions, listingsError,
    } = this.props;
    const error = geoError || listingsError;
    const loading = geoLocating || fetchingListings;
    return (
      <Wrapper>
        <HeroSection
          geoLocate={geoLocate}
          geoLocating={geoLocating}
          geoLocation={geoLocation}
          fetchingListings={fetchingListings}
          listingsLocation={listingsLocation}
        />
        <Content>
          {error && <div data-tag={`error`}>{error.message}</div>}
          {loading && <LoadingBars />}
          {!loading && listingsLocation && listingsRegions && (
            <Listings
              location={listingsLocation}
              regions={listingsRegions}
            />
          ) }
        </Content>
      </Wrapper>
    );
  }
}

HomePage.propTypes = {
  geoLocating: PropTypes.bool,
  geoLocation: PropTypes.object,
  geoError: PropTypes.object,
  fetchingListings: PropTypes.bool,
  listingsLocation: PropTypes.object,
  listingsRegions: PropTypes.object,
  listingsError: PropTypes.object,
  geoLocate: PropTypes.func.isRequired,
  fetchListings: PropTypes.func.isRequired,
};

HomePage.defaultProps = {
  geoLocating: false,
  geoLocation: null,
  geoError: null,
  fetchingListings: false,
  listingsLocation: null,
  listingsRegions: null,
  listingsError: null,
};

export default HomePage;
