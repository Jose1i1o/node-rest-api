const app = require("./server");
const config = require("./config/config");
const connect = require("./db/connect");

// uncomment to get the functions to seed the database
const {
  populateMovies,
  populatePersons,
  populateUsers
} = require("./db/seed");

connect().then(async function onServerInit() {
  config.logger.info(`DB connected`);

  // uncomment if you need to seed the database before
  await populateUsers();
  await populatePersons();
  await populateMovies();

  app.listen(config.app.PORT, () => {
    config.logger.info(`Server running at http://localhost:${config.app.PORT}`);
  });
});