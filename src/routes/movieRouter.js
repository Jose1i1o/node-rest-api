const Router = require("express").Router;
const {
    movieController
} = require('../controllers');

const movieRouter = Router();

movieRouter.get("/", movieController.getMovies);
movieRouter.get("/:movieId", movieController.getSingleMovie);
movieRouter.post("/", movieController.createMovie);
movieRouter.patch("/:movieId", movieController.updateMovie);
movieRouter.delete("/:movieId", movieController.deleteMovie);

module.exports = {
    movieRouter: movieRouter
};