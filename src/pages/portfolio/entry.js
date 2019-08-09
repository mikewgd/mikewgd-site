import React from 'react';
import { graphql } from 'gatsby';
import { Helmet } from "react-helmet"
import convert from 'htmr';

import { PageTemplate, Paragraph, Heading, Tag } from 'components';

const transform = {
  p: Paragraph,
};

const PortfolioEntry = ({ data }) => {
  const { html, frontmatter } = data.markdownRemark;
  const {
    entryUrl,
    media,
    tags,
    title,
  } = frontmatter;
  
  return (
    <PageTemplate>
      <Heading.H1
        margin="23px 0"
        desktopMargin="30px 0 16px 0"
      >
        {title}
      </Heading.H1>
      {convert(html, { transform })}
      <Paragraph margin="23px 0 0 0">
        Technology Used:{' '}
        {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
      </Paragraph>
    </PageTemplate>
  )
}

export default PortfolioEntry;

export const portfolioEntryQuery = graphql`
  query EntryPage($id: String) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        entryUrl
        title
        media {
          mediaType
          mediaUrl
          thumb
        }
        tags
      }
      html
    }
  }
`;
