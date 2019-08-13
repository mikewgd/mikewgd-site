import React from 'react';

import {
  Heading,
  Paragraph,
  Tag,
} from 'components';
import { EntryCard } from './index.css';

const EntryCardComponent = ({
  title,
  blurb,
  tags,
  slug,
}) => (
  <EntryCard href={slug}>
    <Heading.H3 margin="0 0 2px 0">
      {title}
    </Heading.H3>
    <Paragraph
      margin="0 0 12px 0"
      fontSize="14px"
      lineHeight="18px"
    >
      {blurb}
    </Paragraph>
    {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
  </EntryCard>
);

export default EntryCardComponent;
