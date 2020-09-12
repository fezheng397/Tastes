import React from 'react';
import styled from 'styled-components';
import { SideBarItem } from './SideBarItem';

const SideBarContainer = styled.div`
  width: 160px;
  position: fixed;
  background-color: #e0e0eb;
  overflow-x: hidden;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-left: 20px;
  border-radius: 10px 100px / 120px;
`;

interface SideBarProps {
  items: Array<SideBarItemInfo>;
  onItemChange: (category: string) => any;
}

export interface SideBarItemInfo {
  category: string;
  displayName: string;
}

export const SideBar: React.FC<SideBarProps> = ({ items, onItemChange }) => {
  return (
    <SideBarContainer>{renderItems(items, onItemChange)}</SideBarContainer>
  );
};

const renderItems = (
  items: Array<SideBarItemInfo>,
  onItemChange: (category: string) => any
) => {
  return items.map((item) => {
    return (
      <SideBarItem
        category={item.category}
        displayName={item.displayName}
        onItemChange={onItemChange}
      />
    );
  });
};
