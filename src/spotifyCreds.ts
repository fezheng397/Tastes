require('dotenv').config();

export const clientId: string = process.env.REACT_APP_SPOTIFY_CLIENT_ID || '';
export const clientSecret: string =
  process.env.REACT_APP_SPOTIFY_CLIENT_SECRET || '';
