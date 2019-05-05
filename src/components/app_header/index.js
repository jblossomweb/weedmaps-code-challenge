import React from 'react';
import logo from '../../assets/logo.png';

import {
  Wrapper,
} from './styles';

const AppHeader = () => (
  <Wrapper>
    <img src={logo} alt="weedmaps logo" />
  </Wrapper>
);

export default AppHeader;
