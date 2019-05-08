import React from 'react';
import storyBuilder from '../../storyBuilder';
import mockCoords from '../../__test__/mocks/coord-mock.json';
import mockLocation from '../../__test__/mocks/location-mock.json';
import AppHeader from '../../components/app_header';
import HomePage from './HomePage';

export const mockActions = {
  geoLocate: () => null,
  fetchListings: () => null,
};

export const mockProps = {
  geoLocation: {
    latitude: mockCoords.latitude,
    longitude: mockCoords.longitude,
  },
  listingsLocation: mockLocation.data.location,
  listingsRegions: mockLocation.data.regions,
};

export const renderScene = knobProps => (knobs, props = knobProps) => (
  <React.Fragment>
    <AppHeader />
    <HomePage
      geoLocating={knobs.boolean('geoLocating', !!props.geoLocating)}
      geoLocation={knobs.object('geoLocation', props.geoLocation)}
      geoError={knobs.object('geoError', props.geoError)}
      fetchingListings={knobs.boolean('fetchingListings', !!props.fetchingListings)}
      listingsLocation={knobs.object('listingsLocation', props.listingsLocation)}
      listingsRegions={knobs.object('listingsRegions', props.listingsRegions)}
      listingsError={knobs.object('listingsError', props.listingsError)}
    />
  </React.Fragment>
  
);

export const scenarios = {
  'default': renderScene({
    ...HomePage.defaultProps,
    ...mockActions,
  }),
  'geoLocating': renderScene({
    ...HomePage.defaultProps,
    ...mockActions,
    geoLocating: true,
  }),
  'geoLocation': renderScene({
    ...HomePage.defaultProps,
    ...mockActions,
    geoLocation: mockProps.geoLocation,
  }),
  'fetchingListings': renderScene({
    ...HomePage.defaultProps,
    ...mockActions,
    geoLocation: mockProps.geoLocation,
    fetchingListings: true,
  }),
  'location': renderScene({
    ...HomePage.defaultProps,
    ...mockActions,
    geoLocation: mockProps.geoLocation,
    listingsLocation: mockProps.listingsLocation,
  }),
  'listings': renderScene({
    ...HomePage.defaultProps,
    ...mockActions,
    geoLocation: mockProps.geoLocation,
    listingsLocation: mockProps.listingsLocation,
    listingsRegions: mockProps.listingsRegions,
  }),
};

storyBuilder(scenarios, 'pages/home_page');
