import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import { GlobalStyle, Container } from '../../../styles/global';
import { Header } from 'components';

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

const PageTemplate = ({
  children,
  maxWidth,
}) => (
  <Container>
    <StaticQuery
      query={query}
      render={({
        site: {
          siteMetadata: {
            title,
            description,
          },
        },
      }) => (
        <Helmet>
          <title>{title}</title>
          <meta name="description" content={description} />
          {/* <meta name="image" content={seo.image} /> */}
        </Helmet>
      )}
    />
    <GlobalStyle />
    <Header />
    <Main maxWidth={maxWidth}>
      {children}
    </Main>
  </Container>
);

export default PageTemplate;

const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
  }  
`;
