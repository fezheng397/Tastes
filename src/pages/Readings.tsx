import React, { useState } from 'react';
import styled from 'styled-components';
import { SideBar } from 'components/SideBar';
import { CategoryItems } from 'components/CategoryItems';
import { ContentWrapper } from './presenters';
import { categories as categoryItems } from 'constants/links';

const ContentContainer = styled.div`
  padding-left: 65px;
`;

const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
`

interface ReadingsProps {}

const sidebarItems = [
  {
    category: 'technology',
    displayName: 'Technology',
  },
  {
    category: 'business',
    displayName: 'Startups/Business',
  },
  {
    category: 'healthcare',
    displayName: 'Healthcare',
  },
  {
    category: 'social',
    displayName: 'Social Justice',
  },
];

const Readings: React.FC<ReadingsProps> = () => {
  const [category, setCategory] = useState('technology');

  const onCategoryChange = (category: string) => {
    setCategory(category);
  };

  return (
      <ContentWrapper>
        <OuterContainer>
          <div>
            <SideBar items={sidebarItems} onItemChange={onCategoryChange} />
          </div>
          <ContentContainer>{renderContent(category)}</ContentContainer>
        </OuterContainer>
      </ContentWrapper>
  );
};

const renderContent = (category: string) => {
  const matchingCategory = categoryItems.find((c) => c.category === category)
  if (matchingCategory) {
    return (
    <CategoryItems category={matchingCategory}/>
    )
  }
  return null
};

export default Readings;
