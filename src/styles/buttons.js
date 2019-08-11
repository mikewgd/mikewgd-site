import styled, { css } from 'styled-components';

import { Anchor } from 'components';
import * as Color from './colors';

export const Button = styled(Anchor)`
  display: inline-block;
  background-color: ${Color.PORTLAND_ORANGE};
  color: ${Color.BABY_POWDER};
  line-height: 16px;
  font-size: 12px;
  font-weight: 700;
  padding: 6px 20px;
  text-decoration: none;
  text-transform: uppercase;

  ${props => props.margin && css`
    margin: ${props.margin};
  `}
`;
