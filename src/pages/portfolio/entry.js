import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet"

import { PageTemplate, Paragraph, Heading } from 'components';
// import { renderMarkdown } from '../utils/renderMarkdown';

const PortfolioEntry = ({ data }) => {
  const {
    blurb,
    entryUrl,
    media,
    tags,
    title,
  } = data.markdownRemark.frontmatter;
  
  return (
    <PageTemplate>
      <Heading.H1
        maxWidth="540px"
        margin="30px auto"
        desktopMargin="52px auto"
      >
        {title}
      </Heading.H1>
    </PageTemplate>
  )
}

export default PortfolioEntry;

export const portfolioEntryQuery = graphql`
  query EntryPage($id: String) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        blurb
        entryUrl
        title
        media {
          mediaType
          mediaUrl
          thumb
        }
        tags
      }
    }
  }
`;
