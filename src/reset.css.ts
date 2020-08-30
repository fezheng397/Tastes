import { createGlobalStyle } from 'styled-components';
import { theme } from 'constants/theme';

const ResetStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: #fff;
    font-family: ${theme.fonts.primary};
  }

  div,
  p,
  a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  li,
  ul {
    line-height: 1;
    font-style: normal;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: #333;
  }


`;

export default ResetStyles;
