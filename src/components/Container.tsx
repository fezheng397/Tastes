import React from 'react';
import styled from 'styled-components';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <ContainerWrapper>{children}</ContainerWrapper>;
};

const ContainerWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
`;

export default Container;
