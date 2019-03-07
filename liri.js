const dotEnv = require("dotenv").config();
var Spotify = require('node-spotify-api');
const keys = require("./keys");

// const spotify = new Spotify(keys.spotify);

console.log(keys.spotify.id);
console.log(keys.spotify.secret);

var spotify = new Spotify({
    id: keys.spotify.id,
    secret: keys.spotify.secret
  });
   
  spotify
    .search({ type: 'track', query: 'All the Small Things', limit:1 })
    .then(function(response) {
    //   console.log(JSON.stringify(response));
    //   console.log(response.name)
    //   console.log(JSON.stringify(response, null, 2))
    //   console.log('THis is the tracks '+response.tracks.href)
      console.log('REPONSE OBJECT '+JSON.stringify(response.tracks.items[0].name, null, 2));
      console.log('Artist: '+ response.tracks.items[0].album.artists[0].name);
      console.log('Song Name: '+ response.tracks.items[0].name);
      console.log('Album Name: '+ response.tracks.items[0].album.name)
    })
    .catch(function(err) {
      console.log(err);
});