// @flow
import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { Helmet } from 'react-helmet';

import { Header } from 'components';

import { GlobalStyle, Container } from '../../../styles/global';
import { SEO } from '../../../constants/seo';

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const Main = styled.main`
  opacity: 0;
  animation: ${fadeIn} .5s ease forwards;

  ${props => props.maxWidth && css`
    max-width: ${props.maxWidth};
  `}
`;

type Props = {
  children: Node,
  maxWidth: String,
};

const PageTemplate = ({
  children,
  maxWidth,
}: Props) => (
  <Container>
    <Helmet>
      <title>{SEO.TITLE}</title>
      <meta name="description" content={SEO.DESCRIPTION} />
      <meta name="keywords" content={SEO.KEYWORDS.join(',')} />
    </Helmet>
    <GlobalStyle />
    <Header />
    <Main maxWidth={maxWidth}>
      {children}
    </Main>
  </Container>
);

export default PageTemplate;
