import styled, { css } from 'styled-components';

import { Anchor, Paragraph } from 'components';

import * as Color from '../../../styles/colors';

export const MediaLink = styled(Anchor)`
  box-sizing: border-box;
  display: inline-block;
  border: 2px solid ${Color.PORTLAND_ORANGE};
  position: relative;

  img {
    display: block;
  }
`;

export const EntryMedia = styled.div`
  ${props => props.maxWidth && css`
    max-width: ${props.maxWidth}px;
    margin: 0 auto;
  `}

  img {
    max-width: 100%;
  }
`;

export const PlayButton = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 20px;
  border: 20px solid rgba(255, 255, 255, 0);
  margin-left: 14px;
  border-left-color: ${Color.PORTLAND_ORANGE};
`;

export const LinkOut = styled.div`
  position: absolute;
  border-top: 2px solid ${Color.PORTLAND_ORANGE};
  width: 14px;
  height: 6px;
  top: 13px;
  right: 8px;
  transform: rotate(-38deg);

  &:after {
    content: '';
    width: 6px;
    height: 6px;
    display: block;
    border: 2px solid ${Color.PORTLAND_ORANGE};
    transform: rotate(45deg);
    top: -5px;
    right: -5px;
    position: absolute;
    border-left-width: 0;
    border-bottom-width: 0;
  }
`;

export const Caption = styled(Paragraph)`
  font-style: italic;
  color: #999;
  font-size: 14px;
  text-align: center;

  a,
  a:active,
  a:visited {
    color: #999;
    text-decoration: underline;
  }
`;
