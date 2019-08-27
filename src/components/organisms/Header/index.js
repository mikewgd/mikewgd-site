import React from 'react';

import { PrimaryNavigation } from 'components';

import {
  Header,
  Logo,
} from './index.css';

import { renderUrl } from '../../../utils/renderCloudinaryUrl';

const LOGO_IMG = 'https://res.cloudinary.com/dgjsyaqlh/image/upload/v1566562982/logo_l6fmac.png';

const HeaderComponent = () => (
  <Header>
    <Logo src={renderUrl(LOGO_IMG)}>mikewgd.com</Logo>
    <PrimaryNavigation />
  </Header>
);

export default HeaderComponent;
