// @flow
import React from 'react';
import convert from 'htmr';

import { VideoPlayer, Anchor } from 'components';

import {
  EntryMedia,
  Caption,
} from './index.css';

import { renderUrl } from '../../../utils/renderCloudinaryUrl';

const transformation = {
  crop: 'scale',
  // aspect_ratio: '16:9',
  background: 'rgb:F4F4F4',
  width: 400,
};

const transform = {
  a: Anchor,
};

const renderMediaType = (type, thumb, full) => {
  switch (type) {
    case 'video':
      return (
        <VideoPlayer
          source={full}
          poster={renderUrl(thumb, transformation)}
        />
      );
    case 'article':
      return (
        <img src={renderUrl(thumb, transformation)} alt={type} />
      );
    default:
      return (<div />);
  }
};

const renderCaption = caption => {
  const reg = new RegExp(/(.*)\[link href="(.*)"\](.*)\[\/link](.*)/);
  return convert(caption.replace(reg, '$1<a href="$2">$3</a> $4'), { transform });
};

type Props = {
  thumb: String,
  full: String,
  caption: String,
  type: String,
};

const EntryMediaComponent = ({
  thumb,
  full,
  caption,
  type,
}: Props) => (
  <EntryMedia maxWidth={transformation.width}>
    {renderMediaType(type, thumb, full)}
    <Caption margin="15px 0 0 0">{renderCaption(caption)}</Caption>
  </EntryMedia>
);

export default EntryMediaComponent;
