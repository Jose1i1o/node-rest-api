const userModel = require("./userModel");
const personModel = require("./personModel");
const movieModel = require("./movieModel");

module.exports = {
  User: userModel,
  Person: personModel,
  Movie: movieModel,
};