const { Router } = require("express");
const { addUser, login } = require("./userControllers");
const { tokenCheck } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", addUser);
userRouter.get("/user", tokenCheck, login);

module.exports = userRouter;
