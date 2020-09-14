import React from 'react';
import { Text } from 'components/Typography';
import styled from 'styled-components';

interface CategoryData {
  category: string;
  displayName: string;
  linkData?: Array<LinkData>;
}

interface LinkInfo {
  descriptor: string;
  url: string;
}

interface LinkData {
  header: string;
  links?: Array<LinkInfo>;
}

interface CategoryItemsProps {
  category: CategoryData;
}

const ContentContainer = styled.div`
  padding-left: 30px;
`;
const LinkContainer = styled.div`
  padding-left: 20px;
`;
const HeaderElems = styled(Text)`
  margin: 20px 0;
`;
const ListElems = styled(Text)`
  margin: 20px 0;
  &:hover {
    text-decoration: underline;
  }
`;

const CategoryItems: React.FC<CategoryItemsProps> = ({ category }) => {
    return (
      <div>
        <HeaderElems as='h2'>{category.displayName}</HeaderElems>
          {category?.linkData?.map((data) => {
            return (
              <ContentContainer>
                <HeaderElems as ='h3'>{data.header}</HeaderElems>
                  <LinkContainer>
                    {data?.links?.map((link) => {
                      return (
                        <ListElems>
                          <a href={link.url}>{`• ${link.descriptor}`}</a>
                        </ListElems>
                      )
                    })}
                  </LinkContainer>
              </ContentContainer>
            )
          })}
      </div>
    )
  };

export default CategoryItems;
