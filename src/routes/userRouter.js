const Router = require("express").Router;
const {
  userController
} = require("../controllers");

const userRouter = Router();

userRouter.get("/", userController.getUsers);
userRouter.patch("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

module.exports = {
  userRouter: userRouter,
};