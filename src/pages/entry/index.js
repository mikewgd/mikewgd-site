// @flow
import React from 'react';
import { graphql } from 'gatsby';
// import { Helmet } from "react-helmet"
import styled from 'styled-components';

import {
  PageTemplate,
  PageHeader,
  Paragraph,
  Tag,
} from 'components';

import { renderMarkdown } from '../../utils/renderMarkdown';
import { Button } from '../../styles/buttons';
import * as Color from '../../styles/colors';

const TagLabel = styled.span`
  display: inline-block;
  margin-right: 10px;
`;

type Props = {
  data: Object,
};

const PortfolioEntry = ({ data }: Props) => {
  const { html, frontmatter } = data.markdownRemark;
  const {
    entryUrl,
    tags,
    title,
  } = frontmatter;

  return (
    <PageTemplate maxWidth="700px">
      <PageHeader
        mobileMargin="23px 0"
        desktopMargin="30px 0 16px 0"
        text={title}
      />
      {renderMarkdown(html)}
      <Paragraph margin="23px 0 48px 0">
        <TagLabel>Technology Used:</TagLabel>
        {tags && tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
      </Paragraph>
      {entryUrl && (
        <Button
          href={entryUrl}
          color={Color.BABY_POWDER}
        >
          Visit Site
        </Button>
      )}
    </PageTemplate>
  );
};

export default PortfolioEntry;

export const portfolioEntryQuery = graphql`
  query EntryPage($id: String) {
    markdownRemark(id: {eq: $id}) {
      id
      frontmatter {
        entryUrl
        title
        tags
      }
      html
    }
  }
`;
