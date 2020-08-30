import { generateKeyPair } from 'crypto';

const colors = {
  text: {
    gray: '#727174',
    black: '#161226',
    blackAccent: '#252525',
    white: '#FFFFFF',
  },
};

const fonts = {
  primary: `'Maven Pro', sans-serif`,
};

const shadows = {
  small: `rgba(36, 63, 97, 0.1) 0px 1px 4px,
  rgba(36, 63, 97, 0.16) 0px 0px 1px`,
};

export const theme = {
  fonts: fonts,
  colors: colors,
  shadows: shadows,
  text: {
    dark: colors.text.blackAccent,
    base: colors.text.black,
    light56: colors.text.gray,
    alt: colors.text.white,
  },
  borders: {
    primary: colors.text.gray,
  },
};
