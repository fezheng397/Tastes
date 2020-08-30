import { useState, useEffect, useCallback } from 'react';
import axios, { AxiosRequestConfig } from 'axios';
import { clientId, clientSecret } from '../spotifyCreds';
import querystring from 'querystring';
import { SinglePlaylistResponse } from 'types/spotify';

type AccessTokenResponse = {
  access_token: string;
  token_type: 'Bearer';
  expires_in: number;
};

async function getAccessToken(): Promise<AccessTokenResponse> {
  const accessTokenSpec: AxiosRequestConfig = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    auth: {
      username: clientId,
      password: clientSecret,
    },
  };

  const response = await axios.post(
    'https://accounts.spotify.com/api/token',
    querystring.stringify({ grant_type: 'client_credentials' }),
    accessTokenSpec
  );

  console.log('access token res:', response);

  return response.data;
}

async function getPlaylist(
  accessToken: string,
  playlistId: string
): Promise<SinglePlaylistResponse> {
  const playlistSpec: AxiosRequestConfig = {
    method: 'GET',
    url: `https://api.spotify.com/v1/playlists/${playlistId}`,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  };

  const response = await axios(playlistSpec);
  console.log('Playlist res:', response.data);
  return response.data;
}

export function useSpotifyApi(playlistIds: string[]): SinglePlaylistResponse[] {
  const [accessToken, setAccessToken] = useState('');
  const [count, setCount] = useState(0);
  const [expired, setExpired] = useState(false);
  const [playlists, setPlaylists] = useState([] as SinglePlaylistResponse[]);

  async function getNewAccessToken() {
    const res = await getAccessToken();
    console.log('Res:', res);
    setAccessToken(res.access_token);
    setExpired(res.expires_in < 60);
  }

  useEffect(() => {
    getNewAccessToken();
  }, [expired]);

  useEffect(() => {
    async function getPlaylists(accessToken: string, playlistIds: string[]) {
      const playlistRequests = playlistIds.map((playlistId) =>
        getPlaylist(accessToken, playlistId)
      );
      let responses = await Promise.all(playlistRequests);
      setPlaylists(responses);
    }
    if (count < 1 && accessToken !== '' && !expired) {
      console.log(accessToken, expired, playlistIds);
      getPlaylists(accessToken, playlistIds);
      setCount((prevState) => prevState + 1);
      console.log(count);
    }
  }, [accessToken, count, expired, playlistIds]);
  console.log(playlists);
  return playlists;
}
