import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../../../styles/global';
import { Header } from '../../../components';

export const Main = styled.main``;

const PageTemplate = ({ children }) => (
  <React.Fragment>
    <GlobalStyle />
    <Header />
    <Main>
      {children}
    </Main>
  </React.Fragment>
);

export default PageTemplate
