import React from 'react';
import { TextSm, TextMd, TextLg } from './presenters';

type TextSize = 'sm' | 'md' | 'lg';

const sizeMap = {
  sm: TextSm,
  md: TextMd,
  lg: TextLg,
};

interface TextProps {
  children: React.ReactNode;
  className?: string;
  color?: string;
  size?: TextSize;
}

const Text: React.FC<TextProps> = ({
  size = 'md',
  children,
  className,
  color,
}) => {
  const Component = sizeMap[size];
  return (
    <Component className={className} color={color}>
      {children}
    </Component>
  );
};

export default Text;
