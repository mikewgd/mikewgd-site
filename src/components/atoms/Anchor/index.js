import React from 'react';

import {
  RelativeAnchor,
  Anchor,
} from './index.css';

const RELATIVE_LINK_REGEX = /^\//;
const LINK_HANDLER = '#';

const AnchorTag = ({
  href,
  children,
  handleClick,
  ...props,
}) => {
  // Internal link
  if (RELATIVE_LINK_REGEX.test(href)) {
    return <RelativeAnchor {...props} to={href}>{children}</RelativeAnchor>
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
    )
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
}

export default AnchorTag;
