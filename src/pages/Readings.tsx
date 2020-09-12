import React, { useState } from 'react';
import styled from 'styled-components';
import { SideBar } from 'components/SideBar';
import { ContentWrapper } from './presenters';

const ContentContainer = styled.div`
  padding-left: 230px;
`;

interface ReadingsProps {}

const sidebarItems = [
  {
    category: 'technology',
    displayName: 'Technology',
  },
  {
    category: 'politics',
    displayName: 'Politics',
  },
  {
    category: 'philosophy',
    displayName: 'Philosophy',
  },
  {
    category: 'memes',
    displayName: 'Comics/Memes',
  },
];

const Readings: React.FC<ReadingsProps> = () => {
  const [category, setCategory] = useState('technology');

  const onCategoryChange = (category: string) => {
    setCategory(category);
  };

  return (
    <ContentWrapper>
      <SideBar items={sidebarItems} onItemChange={onCategoryChange} />
      <ContentContainer>{renderContent(category)}</ContentContainer>
    </ContentWrapper>
  );
};

const renderContent = (category: string) => {
  return <h1>{category}</h1>;
};

export default Readings;
