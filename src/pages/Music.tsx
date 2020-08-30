import React from 'react';
import styled from 'styled-components';
import { ContentWrapper } from './presenters';
import { useSpotifyApi } from '../hooks/spotifyHook';
import { Playlist } from 'components/Spotify';

interface MusicProps {}

const playlistIds = [
  '4tuwuzl3GRJNYEoDQd434U?si=5alfQISQTDKaZcuVTt8Umg',
  '4arGHjGh3Fv1yKCOCUsBMT?si=rWtcIT9bTLaOPA7mol65xg',
];

const Music: React.FC<MusicProps> = () => {
  const playlists = useSpotifyApi(playlistIds);
  return (
    <ContentWrapper>
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

export default Music;
