import React, { useState } from 'react';
import styled from 'styled-components';
import { SideBar } from 'components/SideBar';
import { CategoryItems } from 'components/CategoryItems';
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
  const matchingCategory = categoryItems.find((c) => c.category === category)
  if (matchingCategory) {
    return (
    <CategoryItems category={matchingCategory}/>
    )
  }
  return null
};

const categoryItems = [
  {
    category: 'technology',
    displayName: 'Technology',
    linkData: [
      {
        header: 'Startups',
        links: [
          {
            descriptor: 'How AirBNB Handles Distributed Payments',
            url: 'https://medium.com/airbnb-engineering/avoiding-double-payments-in-a-distributed-payments-system-2981f6b070bb',
          },
          {
            descriptor: 'Codebase is an Organism',
            url: 'https://meltingasphalt.com/a-codebase-is-an-organism/',
          },
        ]
      },
      {
        header: 'Space',
        links: [
          {
            descriptor: 'Nobody Cares About Quality',
            url: 'https://lethain.com/nobody-cares-about-quality/',
          },
          {
            descriptor: 'Epic Sucks',
            url: 'https://www.nytimes.com/2019/11/01/health/epic-electronic-health-records.html?smid=nytcore-ios-share',
          }
        ]
      },
    ]
  }
]

export default Readings;
