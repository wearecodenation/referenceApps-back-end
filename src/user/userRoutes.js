const { Router } = require("express");
const {
  addUser,
  listUsers,
  updateUser,
  deleteUser,
} = require("./userControllers");
const userRouter = Router();

userRouter.post("/user", addUser);
userRouter.get("/user", listUsers);
userRouter.put("/user", updateUser);
userRouter.delete("/user/:username", deleteUser);

module.exports = userRouter;
