import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  }
  html,
  body {
    width: 100%;
  }
  html,
  body,
  div#root {
    height: 100%;
  }
  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: ${({ theme }) => theme.colors.surfaceBase};
    text-align: ${({ theme }) => theme.leading};
    font-family: ${({ theme }) => theme.fontFamily} !important;
    direction: ${({ theme }) => theme.direction};
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
