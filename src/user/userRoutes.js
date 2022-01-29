const { Router } = require("express");
const { addUser, login, updateUser, deleteUser } = require("./userControllers");
const { tokenCheck, hashPass } = require("../middleware");
const userRouter = Router();

userRouter.post("/user", hashPass, addUser);
userRouter.get("/user", tokenCheck, login);
userRouter.post("/login", login);
userRouter.put("/user", tokenCheck, updateUser);
userRouter.delete("/user", tokenCheck, deleteUser);

module.exports = userRouter;
