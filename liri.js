const dotEnv = require("dotenv").config();
const axios = require('axios');
const Spotify = require('node-spotify-api');
var moment = require('moment');
const keys = require("./keys");

moment().format();


//ASK KIT/PAVAN FOR HELP
// const date = moment("2019-03-10T00:00:00", moment.ISO_8601);
// console.log(date);

// var day = moment("1995-12-25");
// console.log(day);

// var now = moment();
// console.log(now)
// console.log(moment(now));

// const spotify = new Spotify({
//     id: keys.spotify.id,
//     secret: keys.spotify.secret
//   });
   
//   spotify
//     .search({ type: 'track', query: 'Wont Live Here', limit:1 })
//     .then(function(response) {
//     //   console.log('REPONSE OBJECT '+JSON.stringify(response.tracks.items[0], null, 2));
//       console.log('Artist: '+ response.tracks.items[0].album.artists[0].name);
//       console.log('Song Name: '+ response.tracks.items[0].name);
//       console.log('Album Name: '+ response.tracks.items[0].album.name);
//       console.log('Preview: '+ response.tracks.items[0].preview_url);
//     })
//     .catch(function(err) {
//       console.log(err);
// });

// aristName = 'Drake'

// axios.get('https://rest.bandsintown.com/artists/' + aristName + '/events?app_id=codingbootcamp')
//   .then(function (response) {
//     // console.log('API Response: '+response[0].lineup);
//     console.log(response.data[0]);
//     console.log('Venue Name: '+ response.data[0].venue.name);
//     console.log('Venue Location: '+ response.data[0].venue.city + ", " + response.data[0].venue.country);
//     console.log('Event Date: '+ response.data[0].datetime.slice(0,9));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });


  axios.get("http://www.omdbapi.com/?apikey=trilogy&t=The+Matrix")
  .then(function (response) {
    // console.log('API Response: '+response[0].lineup);
    console.log('Title: '+response.data.Title);
    console.log('Year: '+response.data.Year);
    console.log('IMDB Rating: '+response.data.imdbRating);
    console.log('Rotten Tomatoes Rating: '+response.data.Ratings[0].Value);
    console.log('Country: '+response.data.Country);
    console.log('Language: '+response.data.Language);
    console.log('Plot: '+response.data.Plot);
    console.log('Actors: '+response.data.Actors);
  })
  .catch(function (error) {
    console.log(error);
  });