import styled, { css } from 'styled-components';
import { Link } from 'gatsby';

import * as Color from '../../../styles/colors';

const AnchorStyles = css`
  &,
  &:active,
  &:visited {
    color: ${props => props.color || Color.PORTLAND_ORANGE};
    text-decoration: none;
  }

  &:active {
    top: 1px;
    left: 1px;
  }
`;

export const Anchor = styled.a`
  ${AnchorStyles};
`;

export const RelativeAnchor = styled(Link)`
  ${AnchorStyles};
`;
