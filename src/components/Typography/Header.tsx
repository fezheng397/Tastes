import React from 'react';
import { H1, H2, H3, H4, H5, H6 } from './presenters';

type HeaderComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

const headerMap = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
};

interface HeaderProps {
  as: HeaderComponent;
  children: React.ReactNode;
  className?: string;
  color?: string;
  weight?: number;
}

const Header: React.FC<HeaderProps> = ({
  as = 'h1',
  children,
  className,
  color,
  weight,
}) => {
  const Component = headerMap[as];
  return (
    <Component className={className} color={color} weight={weight}>
      {children}
    </Component>
  );
};

export default Header;
