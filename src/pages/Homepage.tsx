import React, { useState } from 'react';
import styled from 'styled-components';

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
  const [active, setActive] = useState('music');

  return (
    <Container>
      <Nav>
        Header 1
        <Tabs>
          {tabContent.map((content) => (
            <Tab>{content.id}</Tab>
          ))}
        </Tabs>
      </Nav>
    </Container>
  );
};

const Container = styled.div``;

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 69px;
`;

const Tabs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Tab = styled.div`
  padding: 8px;
`;

export default Homepage;
