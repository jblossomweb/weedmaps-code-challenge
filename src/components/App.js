import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import get from 'lodash.get';
import { locate } from '../actions';
import logo from '../assets/logo.png';
import ListingCards from './listing_cards';

import Locate from '../icons/locate';
import MapPin from '../icons/map-pin';
import Delivery from '../icons/delivery';
import Dispensary from '../icons/dispensary';
import Doctor from '../icons/doctor';

import {
  AppHeader,
  AppWrapper,
  AppContent,
  ListingGroups,
  HeroSection,
  ContentContainer,
  LocationSection,
  TextContent,
  LocateButton,
} from './styles';

import palette from '../palette';

const regionTypes = ['delivery', 'dispensary', 'doctor'];
const regionLabels = {
  delivery: 'Delivery Services',
  dispensary: 'Dispensary Storefronts',
  doctor: 'Doctors',
};
const regionIcons = {
  delivery: <Delivery fill={palette.black} />,
  dispensary: <Dispensary fill={palette.black} />,
  doctor: <Doctor fill={palette.black} />,
};

export class App extends Component {
  constructor(props) {
    super(props);
    this.locateMe = this.locateMe.bind(this);
    this.state = {
      loadingTimer: 0,
    };
  }

  locateMe() {
    const { dispatch } = this.props;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        dispatch(locate(position.coords));
      });
    }
  };

  getLabel = (listings, label, icon) => {
    if (get(listings, 'listings').length) {
      return (
        <div key={label}>
          <strong> {icon} {label} </strong>
        </div>
      );
    }
    return <div />;
  };

  render() {
    const { isLocating, location, regions, error } = this.props;
    return (
      <AppWrapper>
        <AppHeader>
          <img src={logo} alt="weedmaps logo" />
        </AppHeader>
        <HeroSection>
          <ContentContainer>
            <LocationSection>
              <h2>
                <MapPin fill={palette.gray4} width={'60px'} height={'40px'} />
                <span> {location ? location.name : ''} </span>
                <span> {isLocating && !location ? '...locating' : ''} </span>
              </h2>
              <LocateButton onClick={this.locateMe}>
                <Locate fill={palette.gray4} />
                <span> Locate Me </span>
              </LocateButton>
            </LocationSection>
            <TextContent>
              {location && location.quote ? location.quote : `Click the 'Locate Me' button above`}
            </TextContent>
          </ContentContainer>
        </HeroSection>
        <AppContent>
          {error && <div> {error.message} </div>}
          {regions && (
            <React.Fragment>
              {regionTypes.map(regionType => (
                <ListingGroups key={regionType}>
                  <h2>
                  {this.getLabel(regions[regionType], regionLabels[regionType], regionIcons[regionType])}
                  </h2>
                  <ListingCards
                    listings={get(regions[regionType], 'listings')}
                  />
                </ListingGroups>
              ))}
            </React.Fragment>
          )}
        </AppContent>
      </AppWrapper>
    );
  }
}

const mapStateToProps = state => state.location;

App.propTypes = {
  isLocating: PropTypes.bool.isRequired,
  location: PropTypes.object,
  regions: PropTypes.object,
  dispatch: PropTypes.any,
  error: PropTypes.object,
};

App.defaultProps = {
  isLocating: false,
  location: {},
  regions: {},
  error: {},
};

export default connect(mapStateToProps)(App);
