// @flow
import React from 'react';

import {
  VideoContainer,
  VideoTag,
} from './index.css';

import { renderUrl } from '../../../utils/renderCloudinaryUrl';

type Props = {
  poster: String,
  source: String,
  maxWidth: Number,
};

const VideoPlayer = ({
  poster,
  source,
  maxWidth,
}: Props) => (
  <VideoContainer maxWidth={maxWidth}>
    <VideoTag
      controls
      muted
      autoPlay
      loop
      crossOrigin="anonymous"
      preload="auto"
      poster={renderUrl(poster)}
    >
      <source src={source} type="video/mp4" />
    </VideoTag>
  </VideoContainer>
);

export default VideoPlayer;
