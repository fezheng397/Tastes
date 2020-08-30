import React, { useState } from 'react';
import styled from 'styled-components';
import { SinglePlaylistResponse } from 'types/spotify';
import { Header, Text } from 'components/Typography';
import Track from './Track';

interface PlaylistProps {
  playlist: SinglePlaylistResponse;
}

const Playlist: React.FC<PlaylistProps> = ({ playlist }) => {
  return (
    <PlaylistWrapper>
      <PlaylistHeader>
        <HeaderImage src={playlist.images[1].url} />
        <div>
          <HeaderText>
            <Header as='h2'>{playlist.name}</Header>
          </HeaderText>
          <Text>Created by {playlist.owner.display_name}</Text>
        </div>
      </PlaylistHeader>
      <PlaylistContents>
        {playlist.tracks.items.map((item, index) => (
          <Track index={index} item={item} />
        ))}
      </PlaylistContents>
    </PlaylistWrapper>
  );
};

const PlaylistWrapper = styled.div`
  min-width: 400px;
  border-radius: 12px;
  box-shadow: ${({ theme }) => theme.shadows.small};
  padding: 20px;
`;

const PlaylistHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const HeaderImage = styled.img`
  width: 80px;
  border-radius: 10px;
  margin-right: 20px;
`;

const HeaderText = styled.div`
  padding-bottom: 8px;
`;

const PlaylistContents = styled.div`
  padding: 16px;
  max-height: 300px;
  overflow-y: scroll;
`;

export default Playlist;
