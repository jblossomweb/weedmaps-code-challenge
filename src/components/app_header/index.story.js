import React from 'react';
import storyBuilder from '../../storyBuilder';

import AppHeader from './';

export const scenarios = {
  'default': () => (
    <AppHeader />
  ),
};

storyBuilder(scenarios, 'components/app_header');
