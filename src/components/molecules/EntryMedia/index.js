import React from 'react';

import { Heading } from 'components';
import {
  EntryMedia,
  MediaLink,
  PlayButton,
  LinkOut,
} from './index.css';

const EntryMediaComponent = ({ title, media }) => (
  <EntryMedia>
    <Heading.H2
      color="#000"
      margin="0 0 12px"
    >
      Media
    </Heading.H2>

    {media.map(item => (
      <MediaLink key={item.mediaUrl} href={item.mediaUrl}>
        {item.mediaType === 'video' && <PlayButton />}
        {item.mediaType === 'article' && <LinkOut />}
        <img src={item.thumb} alt={title} />
      </MediaLink>
    ))}
  </EntryMedia>
);

export default EntryMediaComponent;