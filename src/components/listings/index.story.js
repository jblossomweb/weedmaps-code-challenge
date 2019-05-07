import React from 'react';
import storyBuilder from '../../storyBuilder';
import mockLocation from '../../__test__/mocks/location-mock.json';
import Listings from './';

export const mockProps = {
  location: mockLocation.data.location,
  regions: mockLocation.data.regions,
};

export const scenarios = {
  'default': (knobs, props = mockProps) => (
    <Listings
      location={knobs.object('location', props.location)}
      regions={knobs.object('regions', props.regions)}
    />
  ),
};

storyBuilder(scenarios, 'components/listings');
