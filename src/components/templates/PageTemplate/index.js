import React from 'react';
import styled from 'styled-components';
import { graphql, StaticQuery } from 'gatsby';
import { Helmet } from 'react-helmet';

import { GlobalStyle, Container } from '../../../styles/global';
import { Header } from 'components';

export const Main = styled.main``;

const PageTemplate = ({ children }) => (
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
    <Main>
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
