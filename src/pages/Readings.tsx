import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div``;

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

const SideBarItem = styled.div`
  padding: 6px 8px 6px 16px;
  text-decoration: none;
  font-size: 18px;
  color: #818181;
  display: block;

  &:hover {
    color: #f1f1f1;
    cursor: default;
  }
`;

const ContentContainer = styled.div`
  padding-left: 230px;
`;

interface ReadingsProps {}

const Readings: React.FC<ReadingsProps> = () => {
  const [category, setCategory] = useState('technology');
  return (
    <Container>
      <SideBarContainer>
        <SideBarItem onClick={() => setCategory('technology')}>
          Technology
        </SideBarItem>
        <SideBarItem onClick={() => setCategory('politics')}>
          Politics
        </SideBarItem>
        <SideBarItem onClick={() => setCategory('philosophy')}>
          Philosophy
        </SideBarItem>
        <SideBarItem onClick={() => setCategory('memes')}>Memes</SideBarItem>
      </SideBarContainer>
      <ContentContainer>{renderContent(category)}</ContentContainer>
    </Container>
  );
};

const renderContent = (category: string) => {
  return <h1>{category}</h1>;
};

export default Readings;
