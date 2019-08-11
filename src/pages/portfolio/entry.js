import React from 'react';
import { graphql } from 'gatsby';
// import { Helmet } from "react-helmet"
import convert from 'htmr';

import { PageTemplate, Paragraph, Heading, Tag, EntryMedia } from 'components';
import { TagLabel } from './index.css';
import { Button } from '../../styles/buttons';
import * as Color from '../../styles/colors';

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
      <Paragraph margin="23px 0 48px 0">
        <TagLabel>Technology Used:</TagLabel>
        {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
      </Paragraph>
      {media.length &&
        <EntryMedia 
          media={media} 
          title={title}
        />
      }
      {entryUrl && 
        <Button
          href={entryUrl}
          margin="40px 0 0"
          color={Color.BABY_POWDER}
        >
          Visit Site
        </Button>
      }
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
