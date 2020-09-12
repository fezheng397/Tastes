const colors = {
  text: {
    gray: '#727174',
    black: '#161226',
    blackAccent: '#252525',
    white: '#FFFFFF',
  },
  teal: {
    dark: '#03045e',
    base: '#023e8a',
    light56: '#90e0ef',
    light24: '#ade8f4',
    light08: '#caf0f8',
  },
  salmon: {
    base: '#ee8572',
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
    active: colors.teal.base,
    alt: colors.text.white,
  },
  borders: {
    primary: colors.text.gray,
  },
};
