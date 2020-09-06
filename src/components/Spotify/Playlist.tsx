import React from 'react';
import styled from 'styled-components';
import { SinglePlaylistResponse } from 'types/spotify';
import Track from './Track';
import PlaylistHeader from './PlaylistHeader';

interface PlaylistProps {
  playlist: SinglePlaylistResponse;
}

const Playlist: React.FC<PlaylistProps> = ({ playlist }) => {
  return (
    <PlaylistWrapper>
      <PlaylistHeader playlist={playlist} />
      <PlaylistContents>
        {playlist.tracks.items.map((item, index) => (
          <Track index={index} item={item} />
        ))}
      </PlaylistContents>
    </PlaylistWrapper>
  );
};

const PlaylistWrapper = styled.div`
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 32px;
  max-width: 400px;
`;

const PlaylistContents = styled.div`
  max-height: 300px;
  overflow-y: scroll;
`;

export default Playlist;
