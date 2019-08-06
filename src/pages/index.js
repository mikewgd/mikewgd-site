import React from 'react';
import { graphql } from 'gatsby';
import convert from 'htmr';

import { PageTemplate, Heading } from 'components';
import { renderMarkdown } from '../utils/renderMarkdown';

const transform = {
  h2: Heading.H2,
};

const Home = ({ data }) => {
  const { html, fields } = data.allMarkdownRemark.nodes[0];
  const { pageHeader } = fields.frontmattermd;

  return (
    <PageTemplate>
      <Heading.H1
        maxWidth="540px"
        margin="22px auto"
        desktopMargin="52px auto"
      >
        {renderMarkdown(pageHeader.html)}
      </Heading.H1>
      {/* {convert(html, { transform })} */}
    </PageTemplate>
  )
};

export default Home;

export const homePageQuery = graphql`
  query {
    allMarkdownRemark(limit: 1, filter: {fields: {slug: {eq: "/"}}}) {
      nodes {
        fields {
          frontmattermd {
            pageHeader {
              html
            }
          }
        },
        html
      }
    }
  }  
`;

