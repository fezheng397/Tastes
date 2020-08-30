import React from 'react';
import { ContentWrapper } from './presenters';
import { useSpotifyApi } from '../hooks/spotifyHook';
import { Playlist } from 'components/Spotify';

interface MusicProps {}

const playlistIds = ['4tuwuzl3GRJNYEoDQd434U?si=5alfQISQTDKaZcuVTt8Umg'];

const Music: React.FC<MusicProps> = () => {
  const playlists = useSpotifyApi(playlistIds);
  return (
    <ContentWrapper>
      {playlists.length > 0 &&
        playlists.map((playlist) => <Playlist playlist={playlist} />)}
    </ContentWrapper>
  );
};

export default Music;
