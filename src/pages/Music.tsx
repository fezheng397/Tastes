import React from 'react';
import styled from 'styled-components';
import { ContentWrapper } from './presenters';
import { useSpotifyApi } from '../hooks/spotifyHook';
import { Playlist } from 'components/Spotify';
import { Header, Text } from 'components/Typography';
import { theme } from 'constants/theme';

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
          A compilation of music Aditya and I have discovered over the years.
        </Text>
      </Description>
      {playlists.length > 0 &&
        playlists.map((playlist) => (
          <PlaylistWrapper>
            <Playlist playlist={playlist} />
          </PlaylistWrapper>
        ))}
    </ContentWrapper>
  );
};

const PlaylistWrapper = styled.div`
  padding: 20px;
`;

const Description = styled.div`
  text-align: center;
  padding: 32px;
`;

const PageHeader = styled.div`
  margin-bottom: 20px;
`;

export default Music;
