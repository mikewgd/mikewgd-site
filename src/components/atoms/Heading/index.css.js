import styled, { css } from 'styled-components';
import * as Color from '../../../styles/colors';
import { media } from "../../../styles/responsive";


export const H1 = styled.h1`
  font-weight: 400;
  border-left: 5px solid ${Color.WELDON_BLUE};
  padding: 2px 0 2px 24px;
  margin: ${props => props.margin || 0};
  font-size: 24px;
  line-height: 135%;
  display: block;

  ${props => props.maxWidth && css`
    max-width: ${props.maxWidth};
  `};

  a {
    position: relative;

    &,
    &:active,
    &:visited {
      border-bottom: 3px solid ${Color.PORTLAND_ORANGE};
      transition: color .3s ease-in-out;
      display: inline-block;
    }

    &:before {
      content: '';
      position: absolute;
      height: calc(100% + 5px);
      background-color: ${Color.PORTLAND_ORANGE};
      transition: width .3s ease-in-out;
      width: 0;
      z-index: -1;
    }

    &:hover {
      color: ${Color.BABY_POWDER};

      &:before {
        width: 100%;
      }
    }
  }

  ${media.md`
    font-size: 28px;
    margin: ${props => props.desktopMargin || 0};
  `};
`;

export const H2 = styled.h2`
  font-size: 18px;
  line-height: 21px;
  letter-spacing: 0.04em;
  color: ${Color.DARK_LIVER};
`;

export const H3 = styled.h3`
`;

export const H4 = styled.h4`
`;