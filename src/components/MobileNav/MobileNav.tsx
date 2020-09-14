import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { Text } from 'components/Typography';
import { TabData } from 'pages/Homepage';
import { theme } from 'constants/theme';

interface MobileNavProps {
  active: TabData;
  setActive: Dispatch<SetStateAction<TabData>>;
  tabContent: TabData[];
}

const MobileNav: React.FC<MobileNavProps> = ({
  active,
  setActive,
  tabContent,
}) => {
  return (
    <MobileNavWrapper>
      {tabContent.map((tab) => {
        const activeTab = tab === active;
        return (
          <MobileNavItem onClick={() => setActive(tab)}>
            <Text
              color={activeTab ? theme.colors.teal.base : theme.text.dark}
              size='md'
              weight={500}
            >
              {tab.displayName}
            </Text>
          </MobileNavItem>
        );
      })}
    </MobileNavWrapper>
  );
};

const MobileNavItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  flex-direction: column;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  cursor: pointer;
  border-right: 1px solid ${theme.divider};

  &:last-child {
    border-right: 0;
  }
`;

const MobileNavWrapper = styled.div`
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 68px;
  background: #fff;
  z-index: 1000;
  border-top: 1px solid rgb(221, 221, 221);
`;

export default MobileNav;
