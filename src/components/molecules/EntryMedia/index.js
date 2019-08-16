/* eslint-disable */
import React from 'react';

import { Heading, VideoPlayer } from 'components';

import {
  EntryMedia,
  MediaLink,
  PlayButton,
  LinkOut,
} from './index.css';

import { renderUrl } from '../../../utils/renderCloudinaryUrl';

const renderMediaType = item => {
  const { mediaType, thumb, mediaUrl } = item;

  switch(mediaType) {
    case 'video':
      return (
        <VideoPlayer
          source={mediaUrl}
          poster={thumb}
        />
      );
    case 'article':
      return (<div></div>);
    default:
      return (<div></div>);
  };

  return null;
}

const EntryMediaComponent = ({ title, media }) => (
  <EntryMedia>
    {media.map(item => renderMediaType(item))}
  </EntryMedia>
);

export default EntryMediaComponent;