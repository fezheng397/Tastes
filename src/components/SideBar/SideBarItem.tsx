import React from 'react';
import styled from 'styled-components';
import { Text } from 'components/Typography';

const SideBarItemStyled = styled(Text)`
  padding: 6px 8px 6px 16px;

  &:hover {
    color: #f1f1f1;
    cursor: default;
  }
`;

interface SideBarItemProps {
  category: string;
  displayName: string;
  onItemChange: (category: string) => any;
}

export const SideBarItem: React.FC<SideBarItemProps> = ({
  category,
  displayName,
  onItemChange,
}) => {
  return (
    <div onClick={() => onItemChange(category)}>
      <SideBarItemStyled>{displayName}</SideBarItemStyled>
    </div>
  );
};
