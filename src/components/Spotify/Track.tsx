import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Header, Text } from 'components/Typography';
import { theme } from 'constants/theme';

interface TrackProps {
  index: number;
  item: any;
}

const Track: React.FC<TrackProps> = ({ index, item }) => {
  const [active, setActive] = useState(false);
  return (
    <a
      href={item.track.external_urls.spotify}
      target='_blank'
      rel='noopener noreferrer'
    >
      <TrackWrapper
        active={active}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
      >
        <TrackHeader>
          <TrackNumber active={active}>
            <Text color={active ? theme.text.alt : theme.text.light56}>
              {index}
            </Text>
          </TrackNumber>
          <TrackInfo>
            <Header as='h6'>{item.track.name}</Header>
            <Text color={theme.text.light56} size='sm'>
              {item.track.artists[0].name}
            </Text>
          </TrackInfo>
        </TrackHeader>
        {/*
        {active && (
          <TrackDetails>
            <TrackImage src={item.track.album.images[2].url} />
          </TrackDetails>
        )} */}
      </TrackWrapper>
    </a>
  );
};

const TrackWrapper = styled.div<{ active: boolean }>`
  ${({ active, theme }) => css`
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;

    border-top: ${!active && '1px #efefef solid'};
    ${active &&
    css`
      box-shadow: ${theme.shadows.small};
    `}
  `}
`;

const TrackHeader = styled.div`
  display: flex;
  align-items: center;
`;

const TrackNumber = styled.div<{ active: boolean }>`
  margin-right: 20px;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  ${({ active, theme }) =>
    active &&
    css`
      background: ${theme.text.dark};
    `}
`;

const TrackInfo = styled.div``;

const TrackImage = styled.img`
  width: 52px;
  border-radius: 4px;
`;

const TrackDetails = styled.div`
  margin-top: 16px;
`;
export default Track;
