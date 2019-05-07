import React from 'react';
import storyBuilder from '../../storyBuilder';

import Avatar from './';

export const mockProps = {
  img: "https://images.weedmaps.com/deliveries/000/008/153/avatar/square_fill/1550007648-Updated_Logo_WM.png",
  width: "70px",
  height: "70px"
};

export const scenarios = {
  'default': (knobs, props = mockProps) => (
    <Avatar
      img={knobs.text('img', props.img || '')}
      width={`${String(knobs.number('width', 70))}px`}
      height={`${String(knobs.number('height', 70))}px`}
    />
  ),
};

storyBuilder(scenarios, 'components/avatar');
