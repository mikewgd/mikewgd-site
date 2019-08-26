import styled from 'styled-components';

import * as Color from '../../../styles/colors';

export const SocialLinks = styled.div`
  margin-top: 34px;
  display: grid;
  grid-template-columns: repeat(4, min-content);
  grid-column-gap: 8px;

  path {
    fill: ${Color.PORTLAND_ORANGE};
  }
`;
