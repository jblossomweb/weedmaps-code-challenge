import React from 'react';
import storyBuilder from '../../storyBuilder';
import HomePage from './HomePage';

export const mockProps = {
  ...HomePage.defaultProps,
  geoLocate: () => null,
  fetchListings: () => null,
};

export const scenarios = {
  'default': (knobs, props = mockProps) => (
    <HomePage
      geoLocating={knobs.boolean('geoLocating', !!props.geoLocating)}
      geoLocation={knobs.object('geoLocation', props.geoLocation)}
      geoError={knobs.object('geoError', props.geoError)}
      fetchingListings={knobs.boolean('fetchingListings', !!props.fetchingListings)}
      listingsLocation={knobs.object('geoLocation', props.geoLocation)}
      listingsError={knobs.object('listingsError', props.listingsError)}
    />
  ),
};

storyBuilder(scenarios, 'pages/home_page');
