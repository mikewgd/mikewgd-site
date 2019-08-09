import React from 'react';
import { Location } from '@reach/router';

import { Header, Logo } from './index.css';
import { PrimaryNavigation } from 'components';

const HeaderComponent = () => (
  <Header>
    <Logo>mikewgd.com</Logo>
    <Location>
      {({ location, navigate }) => (
        <PrimaryNavigation location={location} changeRoute={navigate} />
      )}
    </Location>
  </Header>
);

export default HeaderComponent;