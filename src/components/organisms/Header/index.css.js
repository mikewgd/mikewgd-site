import styled from 'styled-components';

import * as Color from '../../../styles/colors';
import { media } from '../../../styles/responsive';

export const Header = styled.header`
  text-align: center;
  display: grid;
  grid-row-gap: 14px;
  
  ${media.md`
    grid-row-gap: 6px;
    grid-template-columns: 1.5fr 1fr;
  `};
`;

export const Logo = styled.div`
  font-size: 48px;
  line-height: 56px;
  letter-spacing: -0.04em;
  color: ${Color.PORTLAND_ORANGE};
  grid-row: 2;
  position: relative;
  z-index: 2;

  &:before {
    content: '';
    display: inline-flex;
    background: url(${props => props.src}) top left no-repeat;
    background-size: cover;
    height: 28px;
    width: 28px;
    border-radius: 100%;
    border: 3px solid ${Color.PORTLAND_ORANGE};
    margin-right: 9px;

    ${media.md`
      width: 38px;
      height: 38px;
    `};
  }

  ${media.md`
    line-height: 84px;
    grid-row: 1;
    text-align: left;
    font-size: 56px;
  `};

  ${media.lg`
    font-size: 66px;
  `}
`;
