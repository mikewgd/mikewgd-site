import React from 'react';

import { PrimaryNavigation } from 'components';

import {
  Header,
  Logo,
} from './index.css';

const HeaderComponent = () => (
  <Header>
    <Logo>mikewgd.com</Logo>
    <PrimaryNavigation />
  </Header>
);

export default HeaderComponent;
