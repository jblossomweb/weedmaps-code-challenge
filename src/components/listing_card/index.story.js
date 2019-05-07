import React from 'react';
import storyBuilder from '../../storyBuilder';
import mockLocation from '../../__test__/mocks/location-mock.json';
import mockListing from '../../__test__/mocks/listing-mock.json';
import ListingCard from './';

export const mockProps = {
  listing: mockListing.data.listing,
  location: mockLocation.data.location,
};

export const scenarios = {
  'default': (knobs, props = mockProps) => (
    <ListingCard
      listing={knobs.object('listing', props.listing)}
      location={knobs.object('location', props.location)}
    />
  ),
};

storyBuilder(scenarios, 'components/listing_card');
