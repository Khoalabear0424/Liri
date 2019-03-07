const dotEnv = require("dotenv").config();
const keys = require("./keys");

var spotify = new spotify(keys.spotify);