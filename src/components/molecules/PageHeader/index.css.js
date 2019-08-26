import styled, { css } from 'styled-components';

import { Anchor } from 'components';

import * as Color from '../../../styles/colors';
import { media } from '../../../styles/responsive';

export const PageHeader = styled.div`
  margin: ${props => props.margin || 0};
  
  ${props => props.entry && css`
    display: grid;
    align-items: center;
    grid-row-gap: 12px;

    ${media.md`
      grid-template-columns: 3fr 1fr;
    `};
  `};
  
  ${media.md`
    margin: ${props => props.desktopMargin || 0};
  `};
`;

export const BackLink = styled(Anchor)`
  font-size: 14px;
  grid-row: 1;

  ${media.md`
    grid-row: auto;
  `};

  &:before {
    content: "";
    padding: 3px;
    display: inline-block;
    border: 2px solid red;
    transform: rotate(45deg);
    border: 2px solid ${Color.PORTLAND_ORANGE};
    border-right: 0;
    border-top: 0;
  }
`;
