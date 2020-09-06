import React from 'react';
import styled from 'styled-components';
import { ContentWrapper } from './presenters';
import { useSpotifyApi } from '../hooks/spotifyHook';
import { Playlist } from 'components/Spotify';
import { Header, Text } from 'components/Typography';
import { theme } from 'constants/theme';
import { MediaQuery } from 'constants/breakpoints';

interface MusicProps {}

const playlistIds = [
  '4tuwuzl3GRJNYEoDQd434U?si=5alfQISQTDKaZcuVTt8Umg',
  '4arGHjGh3Fv1yKCOCUsBMT?si=rWtcIT9bTLaOPA7mol65xg',
];

const Music: React.FC<MusicProps> = () => {
  const playlists = useSpotifyApi(playlistIds);
  return (
    <ContentWrapper>
      <Description>
        <PageHeader>
          <Header as='h1'>Our Favorite Playlists</Header>
        </PageHeader>
        <Text size='lg' color={theme.text.light56} weight={500}>
          A compilation of some of the best music we've discovered over the
          years.
        </Text>
      </Description>
      <PlaylistSection>
        {playlists.length > 0 &&
          playlists.map((playlist) => (
            <PlaylistContainer>
              <Playlist playlist={playlist} />
            </PlaylistContainer>
          ))}
      </PlaylistSection>
    </ContentWrapper>
  );
};

const PlaylistSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 24px;
  row-gap: 24px;
  margin: 24px 0;
  justify-content: center;
  align-content: center;

  ${MediaQuery('below', 'md')} {
    grid-template-columns: 1fr;
  }
`;

const PlaylistContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Description = styled.div`
  text-align: center;
  padding: 32px;
`;

const PageHeader = styled.div`
  margin-bottom: 20px;
`;

export default Music;
