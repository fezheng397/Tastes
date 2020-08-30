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

export const MediaQuery = (type: MediaQueryType) => {
  return {
    xl: `@media ${Query(type, 'xl')}`,
    lg: `@media ${Query(type, 'lg')}`,
    md: `@media ${Query(type, 'md')}`,
    sm: `@media ${Query(type, 'sm')}`,
    xs: `@media ${Query(type, 'xs')}`,
    xxs: `@media ${Query(type, 'xxs')}`,
  };
};
