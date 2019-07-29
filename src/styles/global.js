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
    width: 100vw;
    background-color: #F4F4F4;
    -webkit-overflow-scrolling: touch;
    ${ROBOTO_REGULAR}
    font-size: 16px;
    line-height: 140.6%;
  }

  a {
    &,
    &:active,
    &:visited {
      color: ${Color.PORTLAND_ORANGE};
      text-decoration: none;
    }

    &:active {
      top: 1px;
      left: 1px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 630px;
  margin: 0 auto;
  padding: 15px;
`;
