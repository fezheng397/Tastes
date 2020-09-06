import React from 'react';
import styled from 'styled-components';

interface CategoryData {
  category: string;
  displayName: string;
  linkData: Array<LinkData>;
}

interface LinkData {
  header: string;
  links: Array<string>;
}

interface CategoryItemsProps {}

const CategoryItems: React.FC<CategoryItemsProps> = ({}) => {
  return <div></div>;
};

export default CategoryItems;
