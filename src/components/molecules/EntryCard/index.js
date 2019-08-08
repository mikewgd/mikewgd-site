import React from 'react';

import { Anchor, Heading, Paragraph } from 'components';
import { EntryCard, Tag } from './index.css';

const EntryCardComponent = ({
  title,
  blurb,
  tags,
  slug,
}) => (
  <EntryCard>
    <Heading.H3 margin="0 0 2px 0">
      <Anchor href={slug}>{title}</Anchor>
    </Heading.H3>
    <Paragraph margin="0 0 12px 0" fontSize="12px" lineHeight="16px">{blurb}</Paragraph>
    {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
  </EntryCard>
);

export default EntryCardComponent;
