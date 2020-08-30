import styled, { css } from 'styled-components';

interface MixinProps {
  font: string;
  fontSize: number;
  fontWeight?: number;
  color: string;
  lineHeight?: number;
  letterSpacing?: number;
}

function createMixin({
  font,
  fontSize,
  color,
  lineHeight,
  letterSpacing,
  fontWeight,
}: MixinProps) {
  return css`
    ${font &&
    css`
      font: ${font}px;
    `};
    font-size: ${fontSize}px;
    font-weight: ${fontWeight || '400'};
    color: ${color};
    ${lineHeight &&
    css`
      line-height: ${lineHeight}px;
    `}
    ${letterSpacing &&
    css`
      letter-spacing: ${letterSpacing}px;
    `}
  `;
}

interface TypographyStyledProps {
  color?: string;
  weight?: number;
}

export const H1 = styled.h1<TypographyStyledProps>`
  ${({ theme, color, weight }) => css`
    ${createMixin({
      font: theme.fonts.primary,
      fontSize: 36,
      color: color || theme.text.dark,
      fontWeight: weight || 600,
    })}
  `}
`;

export const H2 = styled.h2<TypographyStyledProps>`
  ${({ theme, color, weight }) => css`
    ${createMixin({
      font: theme.fonts.primary,
      fontSize: 28,
      color: color || theme.text.dark,
      fontWeight: weight || 600,
    })}
  `}
`;

export const H3 = styled.h3<TypographyStyledProps>`
  ${({ theme, color, weight }) => css`
    ${createMixin({
      font: theme.fonts.primary,
      fontSize: 24,
      color: color || theme.text.dark,
      fontWeight: weight || 600,
    })}
  `}
`;

export const H4 = styled.h4<TypographyStyledProps>`
  ${({ theme, color, weight }) => css`
    ${createMixin({
      font: theme.fonts.primary,
      fontSize: 20,
      color: color || theme.text.dark,
      fontWeight: weight || 600,
    })}
  `}
`;

export const H5 = styled.h5<TypographyStyledProps>`
  ${({ theme, color, weight }) => css`
    ${createMixin({
      font: theme.fonts.primary,
      fontSize: 18,
      color: color || theme.text.dark,
      fontWeight: weight || 600,
    })}
  `}
`;

export const H6 = styled.h6<TypographyStyledProps>`
  ${({ theme, color, weight }) => css`
    ${createMixin({
      font: theme.fonts.primary,
      fontSize: 16,
      color: color || theme.text.dark,
      fontWeight: weight || 600,
    })}
  `}
`;

export const TextSm = styled.p<TypographyStyledProps>`
  ${({ theme, color, weight }) => css`
    ${createMixin({
      font: theme.fonts.primary,
      fontSize: 15,
      color: color || theme.text.base,
      lineHeight: 16,
      fontWeight: weight,
    })}
  `}
`;

export const TextMd = styled.p<TypographyStyledProps>`
  ${({ theme, color, weight }) => css`
    ${createMixin({
      font: theme.fonts.primary,
      fontSize: 16,
      color: color || theme.text.base,
      lineHeight: 18,
      fontWeight: weight,
    })}
  `}
`;

export const TextLg = styled.p<TypographyStyledProps>`
  ${({ theme, color, weight }) => css`
    ${createMixin({
      font: theme.fonts.primary,
      fontSize: 18,
      color: color || theme.text.base,
      lineHeight: 20,
      fontWeight: weight,
    })}
  `}
`;
