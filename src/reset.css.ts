import { createGlobalStyle } from 'styled-components';

const ResetStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #fff;
    font-family: 'Mukta', sans-serif;
  }

  div, p, a {
    line-height: 18px;
  }

  a {
    text-decoration: none;
    color: #333;
  }

`;

export default ResetStyles;
