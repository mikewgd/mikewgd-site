import styled from 'styled-components';

import { Anchor } from 'components';
import * as Color from '../../../styles/colors';

export const EntryCard = styled(Anchor)`
  background-color: #EEEE;
  padding: 10px;
  display: block;

  p {
    color: ${Color.LICORICE};
  }
`;

export const Tag = styled.span`
  font-size: 10px;
  line-height: 12px;
  color: #FFF;
  background-color: ${Color.WELDON_BLUE};
  border-radius: 4px;
  display: inline-block;
  padding: 2px 6px;
  margin-right: 4px;
`;
