const Router = require("express").Router;
const {
  userController
} = require("../controllers");

const authMiddleware = require("../middleware")

const userRouter = Router();

userRouter.use(authMiddleware);
userRouter.get("/", userController.getUsers, authMiddleware);
userRouter.patch("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);

module.exports = {
  userRouter: userRouter,
};