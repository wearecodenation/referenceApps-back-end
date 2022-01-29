const User = require("./userModel");

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(200).send({ user: newUser.username });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.listUsers = async (req, res) => {
  try {
    const users = await User.find({});
    const usernames = users.map((user) => {
      return user.username;
    });
    res.status(200).send({ users: usernames });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    await User.updateOne(
      { username: req.body.username },
      { [req.body.key]: req.body.value }
    );
    res.status(200).send({ message: "Successfully updated user" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    await User.deleteOne({ username: req.params.username });
    res.status(200).send({ message: "Successfully deleted user" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
