import React from 'react';
import storyBuilder from '../../storyBuilder';
import mockListing from '../../__test__/mocks/listing-mock.json';
import AppHeader from '../../components/app_header';
import ListingDetailsPage from './ListingDetailsPage';

export const mockProps = {
  listingId: mockListing.data.listing.wmid,
  listing: mockListing.data.listing,
};

export const renderScene = knobProps => (knobs, props = knobProps) => (
  <React.Fragment>
    <AppHeader />
    <ListingDetailsPage
      listingId={knobs.number('listingId', props.listingId)}
      listing={knobs.object('listing', props.listing)}
    />
  </React.Fragment>
);

export const scenarios = {
  'default': renderScene({
    ...ListingDetailsPage.defaultProps,
  }),
  'listing': renderScene({
    ...mockProps,
  }),
};

storyBuilder(scenarios, 'pages/listing_details_page');
