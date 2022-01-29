const { Router } = require("express");
const { addUser, login } = require("./userControllers");
const { hashPass } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.post("/login", login);

module.exports = userRouter;
