import React from 'react';
import styled from 'styled-components';
import { GlobalStyle, Container } from '../../../styles/global';
import { Header } from 'components';

export const Main = styled.main``;

const PageTemplate = ({ children }) => (
  <Container>
    <GlobalStyle />
    <Header />
    <Main>
      {children}
    </Main>
  </Container>
);

export default PageTemplate
