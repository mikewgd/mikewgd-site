import { createGlobalStyle } from 'styled-components';

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
  }

  a {
    &,
    &:active,
    &:visited {
      color: #666;
    }

    &:hover {
      color: #999;
    }
  }
`;
