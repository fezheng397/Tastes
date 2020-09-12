import React from 'react';
import styled from 'styled-components';
import { Header, Text } from 'components/Typography';
import { SinglePlaylistResponse } from 'types/spotify';
import PlaylistIcon from './PlaylistIcon';
import { MediaQuery } from 'components/MediaQuery';
interface PlaylistHeaderProps {
  playlist: SinglePlaylistResponse;
}
const PlaylistHeader: React.FC<PlaylistHeaderProps> = ({ playlist }) => {
  return (
    <PlaylistHeaderWrapper>
      {playlist.images ? (
        <a
          target='_blank'
          rel='noopener noreferrer'
          href={playlist.external_urls.spotify}
        >
          <HeaderImage src={playlist.images[0].url} />
        </a>
      ) : (
        <HeaderPlaceholder>
          <PlaceholderIcon />
        </HeaderPlaceholder>
      )}
      <div>
        <HeaderText>
          <MediaQuery queryType='atAndAbove' size='sm'>
            <Header as='h2'>{playlist.name}</Header>
          </MediaQuery>
          <MediaQuery queryType='below' size='sm'>
            <Header as='h4'>{playlist.name}</Header>
          </MediaQuery>
        </HeaderText>
        <Text>
          Created by
          <CreatorLink
            target='_blank'
            rel='noopener noreferrer'
            href={playlist.owner.external_urls.spotify}
          >
            {' ' + playlist.owner.display_name}
          </CreatorLink>
        </Text>
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

const CreatorLink = styled.a`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.teal.base};
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.teal.dark};
  }
`;

export default PlaylistHeader;
