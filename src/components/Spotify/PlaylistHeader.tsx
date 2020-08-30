import React from 'react';
import styled from 'styled-components';
import { Header, Text } from 'components/Typography';
import { SinglePlaylistResponse } from 'types/spotify';
import PlaylistIcon from './PlaylistIcon';

interface PlaylistHeaderProps {
  playlist: SinglePlaylistResponse;
}
const PlaylistHeader: React.FC<PlaylistHeaderProps> = ({ playlist }) => {
  return (
    <PlaylistHeaderWrapper>
      {playlist.images ? (
        <HeaderImage src={playlist.images[0].url} />
      ) : (
        <HeaderPlaceholder>
          <PlaceholderIcon />
        </HeaderPlaceholder>
      )}
      <div>
        <HeaderText>
          <Header as='h2'>{playlist.name}</Header>
        </HeaderText>
        <Text>Created by {playlist.owner.display_name}</Text>
      </div>
    </PlaylistHeaderWrapper>
  );
};

const PlaylistHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const HeaderPlaceholder = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 10px;
  margin-right: 20px;
  background: ${({ theme }) => theme.colors.teal.light08};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PlaceholderIcon = styled(PlaylistIcon)`
  color: ${({ theme }) => theme.colors.teal.base};
  width: 36px;
  height: 36px;
`;

const HeaderImage = styled.img`
  width: 80px;
  border-radius: 10px;
  margin-right: 20px;
`;

const HeaderText = styled.div`
  padding-bottom: 8px;
`;

export default PlaylistHeader;
