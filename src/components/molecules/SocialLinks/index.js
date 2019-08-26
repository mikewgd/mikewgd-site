// @flow
import React from 'react';

import { Anchor } from 'components';

import { SocialLinks } from './index.css';

import Facebook from '../../../img/Facebook.inline.svg';
import Github from '../../../img/Github.inline.svg';
import Instagram from '../../../img/Instagram.inline.svg';

type Props = {
  data: Object,
};

const renderIcon = type => {
  switch (type) {
    case 'facebook':
      return <Facebook />;
    case 'github':
      return <Github />;
    case 'instagram':
      return <Instagram />;
    default:
      return <Facebook />;
  }
};

const SocialLinksComponent = ({ data }: Props) => (
  <SocialLinks>
    {data.map(item => (
      <Anchor key={item.socialType} href={item.socialUrl}>
        {renderIcon(item.socialType)}
      </Anchor>
    ))}
  </SocialLinks>
);

export default SocialLinksComponent;
