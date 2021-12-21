const {
  seedMovies,
  seedPerson,
  seedUsers
} = require("./seedData");
const db = require("../models");

async function populatePersons() {
  const persons = seedPerson();

  await db.Person.deleteMany({});
  await db.Person.create([...persons]);
}

async function populateMovies() {
  const movies = await seedMovies();

  await db.Movie.deleteMany({});
  await db.Movie.create([...movies]);
}

async function populateUsers() {
  const users = seedUsers();

  await db.User.deleteMany({});
  await db.User.create([...users]);
}

module.exports = {
  populatePersons: populatePersons,
  populateMovies: populateMovies,
  populateUsers: populateUsers,
};