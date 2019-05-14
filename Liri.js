require("dotenv").config();

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
var keys = require("./keys.js");
var inquire = require('inquirer');
var axios =require('axios');
var fs = require("fs");
var moment =reqiure('moment');


var omdb = (keys.omdb);
var bandsintowen = (keys.bandsintown);
var input= process.argv[2];
var output = process.argv.slice(3).join("");


switch (input) {
    case "concert-this":
        concertThis();
        break;
    case "spotify-this":
        spotifyThisSong();
        break;
    case "movie-this":
        movieThis();
        break;
    
}

function spotifyThis(){
    spotify.search({
        query: "title",
        type: 'track',   
    })
}

for (const track of data.tracks) {
    console.log("Song: " + track.name);
    console.log("Artist: " + track.artists);
    consolge.log("Album: " + track.Album);
    console.log("Spotify Link: " + track.preview.link);
}


function movieThis(){
    axios.get(queryUrl).then(function(response){
        movieThis = response.data;
        console.log("Title of movie: " + movieThis.Tile);
        console.log("IMOB Rating: " + movieThis.Ratings[0].Value);
        console.log("Year of movie: " + movie.Year);
        console.log("Actors of Movie: " + movie.Actors);
        console.log("Rotten Tomatoes Rating: "+ movie.Ratings[1].Value);
        console.log("Language of movie:" + movie.Language);
        console.log("Country of movie: "+ movie.Country);
        console.log("plot of movie: " + movie.Plot);
    })
}

function concertThis() {
   var bandsInTownUrl = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp"
    axios.get(queryUrl).then(function(response) {
        console.log("=======================================");
        console.log("concert Name: "+ concertThis.name);
        console.log("Concert Date: " + concertThis.Date);
        console.log("Concert City: " + concertThis.city);
    })
}

function doWhatItSays() {
    fs.readFile("random.txt" , "utf8" , function (err, data){
        var randomtxt = data.split(",");
        console.log(randomtxt);
    })
}