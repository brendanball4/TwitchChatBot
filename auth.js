import http from 'http';
import open from 'open';
import { parse } from 'url';
import querystring from 'querystring';
import fetch from 'node-fetch';

// Set up the necessary parameters for the Twitch Implicit Grant flow
const twitchClientId = '<CLIENT_ID_HERE>';
const twitchRedirectUri = '<REDIRECT_URI_HERE>';
const twitchScope = 'channel:moderate channel_editor chat:edit chat:read whispers:edit whispers:read';

// Construct the Twitch authorization URL
const twitchAuthUrl = `https://id.twitch.tv/oauth2/authorize?client_id=${twitchClientId}&redirect_uri=${twitchRedirectUri}&response_type=token&scope=${twitchScope}`;

// Open the authorization URL in the user's default browser
open(twitchAuthUrl);

// Create an HTTP server to listen for incoming requests to the redirect URI
const server = http.createServer((req, res) => {
  const { hash } = parse(req.url);
  console.log(req.url);
  const twitchAccessToken = hash ? querystring.parse(hash.slice(1)).access_token : null;

  // Use the access token to make requests to the Twitch API
  fetch('https://api.twitch.tv/helix/users', {
    headers: {
      'Authorization': `Bearer ${twitchAccessToken}`,
      'Client-Id': twitchClientId
    }
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
    .finally(() => {
      // Send a response to the user
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('Authentication successful! You may now close this window.');
      server.close();
    });
});

// Start the HTTP server on the redirect URI port
server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
