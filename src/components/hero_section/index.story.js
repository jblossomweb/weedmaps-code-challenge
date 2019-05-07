import React from 'react';
import storyBuilder from '../../storyBuilder';

import HeroSection from './';

export const mockProps = {
  ...HeroSection.defaultProps,
};

export const scenarios = {
  'default': (knobs, props = mockProps) => (
    <HeroSection
      geoLocating={knobs.boolean('geoLocating', !!props.geoLocating)}
      geoLocation={knobs.object('geoLocation', props.geoLocation)}
      fetchingListings={knobs.boolean('fetchingListings', !!props.fetchingListings)}
      listingsLocation={knobs.object('geoLocation', props.geoLocation)}
    />
  ),
};

storyBuilder(scenarios, 'components/hero_section');
