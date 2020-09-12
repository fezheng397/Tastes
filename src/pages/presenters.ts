import styled from 'styled-components';
import { MediaQuery } from 'constants/breakpoints';

export const ContentWrapper = styled.div`
  padding: 40px;

  ${MediaQuery('below', 'sm')} {
    padding: 20px;
  }
`;
