import React from 'react';
import { Header, Logo } from './index.css';
import { PrimaryNavigation } from '../../../components';

const HeaderComponent = () => (
  <Header>
    <Logo>mikewgd.com</Logo>
    <PrimaryNavigation />
  </Header>
);

export default HeaderComponent;