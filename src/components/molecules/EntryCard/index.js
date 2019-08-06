import React from 'react';

import { Anchor, Heading, Paragraph } from 'components';
import { EntryCard } from './index.css';

const EntryCardComponent = ({
  title,
  blurb,
  tags,
}) => (
  <EntryCard>
    <Heading.H3 margin="0 0 2px 0">
      <Anchor href="/">{title}</Anchor>
    </Heading.H3>
    <Paragraph margin="0" fontSize="12px">{blurb}</Paragraph>
  </EntryCard>
);

export default EntryCardComponent;
