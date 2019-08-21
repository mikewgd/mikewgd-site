import styled, { css } from 'styled-components';

import { media } from '../../../styles/responsive';

export const EntryCardList = styled.div`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 20px;

  ${props => props.margin && css`
    margin: ${props.margin};
  `}

  ${media.md`
    grid-template-columns: 1fr 1fr 1fr;

    ${props => props.desktopMargin && css`
      margin: ${props.desktopMargin};
    `}
  `};
`;
