import styled, { css } from 'styled-components';

import { Paragraph } from 'components';

export const EntryMedia = styled.div`
  ${props => props.maxWidth && css`
    max-width: ${props.maxWidth}px;
    margin: 30px auto;
  `}

  img {
    max-width: 100%;
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
