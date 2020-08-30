import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { Header, Text } from 'components/Typography';
import { theme } from 'constants/theme';
import { ArtistObjectSimplified, PlaylistTrackObject } from 'types/spotify';

interface TrackProps {
  index: number;
  item: PlaylistTrackObject;
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
            <TrackName>
              <Header as='h6' weight={500}>
                {item.track.name}
              </Header>
            </TrackName>

            <Text color={theme.text.light56} size='sm'>
              {getArtistNames(item.track.artists)}
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

function getArtistNames(artists: ArtistObjectSimplified[]) {
  let displayName = '';
  artists.forEach((artist, idx) => {
    if (idx === 0) {
      displayName = displayName.concat(artist.name);
    } else {
      displayName = displayName.concat(`, ${artist.name}`);
    }
  });

  return displayName;
}

const TrackWrapper = styled.div<{ active: boolean }>`
  ${({ active, theme }) => css`
    padding: 12px;
    border-radius: 8px;
    cursor: pointer;

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
  height: 32px;
  width: 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  font-weight: 600;
  transition: background 100ms ease-in;

  ${({ active, theme }) =>
    active &&
    css`
      background: ${theme.colors.teal.dark};
    `}
`;

const TrackInfo = styled.div``;

const TrackName = styled.div`
  margin-bottom: 4px;
`;

const TrackImage = styled.img`
  width: 52px;
  border-radius: 4px;
`;

const TrackDetails = styled.div`
  margin-top: 16px;
`;
export default Track;
