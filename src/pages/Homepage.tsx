import React, { useState } from 'react';
import styled from 'styled-components';
import { Container } from 'components';
import { Music, Readings } from 'pages';
import { MediaQuery } from 'components/MediaQuery';
import { MobileNav } from 'components/MobileNav';

interface HomepageProps {}

export type TabData = {
  id: string;
  displayName: string;
  component: React.ReactNode;
};

const tabContent: TabData[] = [
  {
    id: 'music',
    displayName: 'Music',
    component: <Music />,
  },
  {
    id: 'readings',
    displayName: 'Readings',
    component: <Readings />,
  },
];

const Homepage = () => {
  const [active, setActive] = useState<TabData>(tabContent[0]);

  return (
    <HomepageContainer>
      <Container>
        <MediaQuery queryType='atAndAbove' size='sm'>
          <Nav>
            <NavLogo href='/'>things we like</NavLogo>
            <Tabs>
              {tabContent.map((content) => (
                <Tab>
                  <TabContents onClick={() => setActive(content)}>
                    {content.displayName}
                  </TabContents>
                </Tab>
              ))}
            </Tabs>
          </Nav>
        </MediaQuery>
        <MediaQuery queryType='below' size='sm'>
          <MobileNav
            active={active}
            setActive={setActive}
            tabContent={tabContent}
          />
        </MediaQuery>
        {active.component}
      </Container>
    </HomepageContainer>
  );
};

const HomepageContainer = styled.div`
  padding-bottom: 80px;
`;

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
