/* eslint-disable react/jsx-props-no-spreading */
// @flow
import React from 'react';

import {
  RelativeAnchor,
  Anchor,
} from './index.css';

const RELATIVE_LINK_REGEX = /^\//;
const LINK_HANDLER = '#';

type Props = {
  href: String,
  children: Node,
  handleClick: Function,
};

const AnchorTag = ({
  href,
  children,
  handleClick,
  ...props
}: Props) => {
  // Internal link
  if (RELATIVE_LINK_REGEX.test(href)) {
    return <RelativeAnchor {...props} to={href}>{children}</RelativeAnchor>;
  }

  if (href === LINK_HANDLER) {
    return (
      <Anchor
        {...props}
        href={LINK_HANDLER}
        onClick={e => {
          e.preventDefault();
          handleClick();
        }}
      >
        {children}
      </Anchor>
    );
  }

  // External link
  return (
    <Anchor
      {...props}
      rel="noopener noreferrer"
      target="_blank"
      href={href}
    >
      {children}
    </Anchor>
  );
};

export default AnchorTag;
