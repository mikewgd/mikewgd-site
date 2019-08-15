import React from 'react';

import {
  VideoContainer,
  VideoTag,
} from './index.css';
import { renderUrl } from '../../../utils/renderCloudinaryUrl';

const VideoPlayer = ({
  poster,
  source
}) => (
  <VideoContainer>
    <VideoTag
      controls
      crossOrigin="anonymous"
      preload="auto"
      poster={renderUrl(poster)}
    >
      <source src={source} type="video/mp4" />
    </VideoTag>
  </VideoContainer>
);

export default VideoPlayer;