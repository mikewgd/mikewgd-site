import styled, { css } from 'styled-components';

import { media } from "../../../styles/responsive";

export const EntryCardList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 38px;
  grid-column-gap: 15px;

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