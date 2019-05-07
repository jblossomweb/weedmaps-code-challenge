import React from 'react';
import storyBuilder from '../../storyBuilder';

import StarRating from './';

export const mockProps = {
  ...StarRating.defaultProps,
};

export const scenarios = {
  'default': (knobs, props = mockProps) => (
    <StarRating
      rating={knobs.number('rating', props.rating)}
      maxRating={knobs.number('maxRating', props.maxRating)}
    />
  ),
};

storyBuilder(scenarios, 'components/star_rating');
