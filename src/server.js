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
    // authRouter
} = require('./routes');

// const errorMiddleware = require("./middleware/error-middleware");
const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(json());

app.get("/", function (req, res) {
    res.status(200).send({
        data: "This is a pill to learn how to create a rest API",
    });
});

app.use('/movies', movieRouter);
app.use('/users', userRouter);
app.use('/persons', personRouter);
// app.use('/auth', authRouter);
// app.use(errorMiddleware);



module.exports = app;