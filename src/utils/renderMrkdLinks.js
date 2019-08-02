import React from 'react';
import convert from 'htmr';
import { Anchor } from 'components';

export const renderMrkdLinks = html => {
  let i = 0;
  const transform = {
    _: (node, props, children) => {
      if (typeof props === 'undefined') {
        return node;
      }
  
      if (node === 'a') {
        return (
          <Anchor
            key={i++}
            href={props.href}
          >
            {children}
          </Anchor>
        );
      }
  
      return children;
    },
  };

  return convert(html, { transform })
}
