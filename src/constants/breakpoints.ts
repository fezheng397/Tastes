export type MediaQueryType = 'atAndAbove' | 'below';
export type MediaQuerySize = 'xl' | 'lg' | 'md' | 'sm' | 'xs' | 'xxs';

export const Breakpoints = {
  // Breakpoints
  xl: '1680px',
  lg: '1280px',
  md: '980px',
  sm: '736px',
  xs: '480px',
  xxs: '360px',
};

export const Query = (type: MediaQueryType, size: MediaQuerySize) => {
  const query = type === 'atAndAbove' ? 'min-width' : 'max-width';
  return `(${query}: ${Breakpoints[size]})`;
};

export const MediaQuery = (type: MediaQueryType, size: MediaQuerySize) => {
  return `@media ${Query(type, size)}`;
};
