import { OAuth } from 'oauth';

const apiKey = process.env.NEXT_PUBLIC_LAST_FM_KEY;
const apiSecret = process.env.NEXT_PUBLIC_LAST_FM_SECRET;
const callbackUrl = 'http://localhost:3000/api/lastfm/callback';

const oauth = new OAuth(
  'https://www.last.fm/api/auth',
  'https://ws.audioscrobbler.com/2.0/',
  apiKey,
  apiSecret,
  '1.0',
  callbackUrl,
  'HMAC-SHA1'
);

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
  try {
    const requestToken = await new Promise((resolve, reject) => {
      oauth.getOAuthRequestToken((error, token, tokenSecret) => {
        if (error) {
          reject(error);
        } else {
          resolve({ token, tokenSecret });
        }
      });
    });

    req.session.requestToken = requestToken.token;
    req.session.requestTokenSecret = requestToken.tokenSecret;

    res.redirect(`https://www.last.fm/api/auth/?api_key=${apiKey}&cb=${encodeURIComponent(callbackUrl)}`);
  } catch (error) {
    console.error('Failed to authenticate with Last.fm', error);
    res.status(500).send('Failed to authenticate with Last.fm');
  }
};
