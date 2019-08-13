import styled, { createGlobalStyle } from 'styled-components';

import { ROBOTO_REGULAR } from './fonts';
import * as Color from './colors';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: #F4F4F4;
    -webkit-overflow-scrolling: touch;
    ${ROBOTO_REGULAR}
    font-size: 16px;
    line-height: 140.6%;

    &::-webkit-scrollbar {
      width: 12px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${Color.PORTLAND_ORANGE};
      border-radius: 10px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;
