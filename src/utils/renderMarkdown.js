/* eslint-disable no-return-assign */
import React from 'react';
import convert from 'htmr';
import styled from 'styled-components';

import { Anchor } from 'components';

const Br = styled.br``;

export const renderMarkdown = html => {
  let i = 0;
  const transform = {
    _: (node, props, children) => {
      if (typeof props === 'undefined') {
        return node;
      }

      if (node === 'a' && props.href) {
        const { href } = props;
        return (
          <Anchor
            key={i += 1}
            href={href}
          >
            {children}
          </Anchor>
        );
      }

      if (node === 'br') {
        return <Br key={i += 1} />;
      }

      return children;
    },
  };

  return convert(html, { transform });
};
