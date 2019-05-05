import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HeroSection from '../../components/hero_section';
import Listings from '../../components/listings';

import {
  Wrapper,
  Content,
} from './styles';

class HomePage extends Component {
  render() {
    const {
      geoLocate, geoLocating, geoLocation, geoError,
      fetchListings, fetchingListings, listingsLocation, listingsRegions, listingsError,
    } = this.props;
    const error = geoError || listingsError;
    return (
      <React.Fragment>
        <Wrapper>
          <HeroSection
            geoLocate={geoLocate}
            geoLocating={geoLocating}
            geoLocation={geoLocation}
            fetchListings={fetchListings}
            fetchingListings={fetchingListings}
            listingsLocation={listingsLocation}
          />
          <Content>
            {error && <div> {error.message} </div>}
            {listingsLocation && listingsRegions && (
              <Listings
                location={listingsLocation}
                regions={listingsRegions}
              />
            ) }
          </Content>
        </Wrapper>
      </React.Fragment>
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
