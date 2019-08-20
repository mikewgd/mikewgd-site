/* eslint-disable no-return-assign */
import React from 'react';
import convert from 'htmr';
import styled from 'styled-components';

import { Anchor, Paragraph, EntryMedia } from 'components';

const Br = styled.br``;
const Strong = styled.strong``;

export const renderMarkdown = html => {
  let i = 0;
  const transform = {
    strong: Strong,
    _: (node, props, children) => {
      if (typeof props === 'undefined') {
        return node;
      }

      if (node === 'span' && props.className) {
        const { thumb, full, type } = props;
        return (
          <EntryMedia
            key={i += 1}
            thumb={thumb}
            caption={children[0]}
            full={full}
            type={type}
          />
        );
      }

      if (node === 'p') {
        return (
          <Paragraph key={i += 1}>
            {children}
          </Paragraph>
        );
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
