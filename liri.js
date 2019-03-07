const dotEnv = require("dotenv").config();
const Spotify = require('node-spotify-api');
const keys = require("./keys");

const spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
  });
   
  spotify
    .search({ type: 'track', query: 'Wont Live Here', limit:1 })
    .then(function(response) {
    //   console.log('REPONSE OBJECT '+JSON.stringify(response.tracks.items[0], null, 2));
      console.log('Artist: '+ response.tracks.items[0].album.artists[0].name);
      console.log('Song Name: '+ response.tracks.items[0].name);
      console.log('Album Name: '+ response.tracks.items[0].album.name);
      console.log('Preview: '+ response.tracks.items[0].preview_url);
    })
    .catch(function(err) {
      console.log(err);
});