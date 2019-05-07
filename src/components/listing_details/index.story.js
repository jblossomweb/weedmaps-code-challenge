import React from 'react';
import storyBuilder from '../../storyBuilder';
import mockListing from '../../__test__/mocks/listing-mock.json';
import ListingDetails from './';

export const mockProps = {
  listing: mockListing.data.listing,
};

export const scenarios = {
  'default': (knobs, props = mockProps) => (
    <ListingDetails
      listing={knobs.object('listing', props.listing)}
    />
  ),
};

storyBuilder(scenarios, 'components/listing_details');
