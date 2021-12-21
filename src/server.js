const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const {
    json
} = require("body-parser");

const {
    userRouter,
    personRouter,
    movieRouter,
    authRouter
} = require('./routes');

const errorMiddleware = require("./middleware/error-middleware");
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());

app.use('/movies', movieRouter);
app.use('/persons', personRouter);
app.use('/users', userRouter);
app.use('/auth', authRouter);

app.get("/", function (req, res) {
    res.status(200).send({
        author: "Jose Valenzuela",
        version: "1.0.0",
        description: "This is a pill to learn how to create a rest API",
    });
});

app.use(errorMiddleware);

module.exports = app;