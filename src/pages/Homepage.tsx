import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from '../components';

interface HomepageProps {}

type TabData = {
  id: string;
  displayName: string;
  component: React.ReactNode;
};

const tabContent: TabData[] = [
  {
    id: 'music',
    displayName: 'Music',
    component: <div></div>,
  },
  {
    id: 'articles',
    displayName: 'Articles',
    component: <div></div>,
  },
  {
    id: 'readings',
    displayName: 'Readings',
    component: <div></div>,
  },
];

const Homepage = ({}) => {
  const [active, setActive] = useState(tabContent[0]);

  return (
    <HomepageContainer>
      <Container>
        <Nav>
          <NavLogo href='/'>Heading</NavLogo>
          <Tabs>
            {tabContent.map((content) => (
              <Tab>
                <TabContents>{content.displayName}</TabContents>
              </Tab>
            ))}
          </Tabs>
        </Nav>
      </Container>
    </HomepageContainer>
  );
};

const HomepageContainer = styled.div``;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 69px;
`;

const NavLogo = styled.a`
  font-size: 24px;
  font-weight: 600;
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tab = styled.div`
  font-weight: 500;
  padding: 0 8px;
`;

const TabContents = styled.div`
  cursor: pointer;
  padding: 12px;
  border-radius: 22px;
  transition: background 200ms ease-in;

  &:hover {
    background: rgb(247, 247, 247);
  }
`;

export default Homepage;
