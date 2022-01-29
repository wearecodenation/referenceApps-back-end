const { findById } = require("./userModel");
const User = require("./userModel");

exports.addUser = async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    const token = newUser.generateAuthToken();
    console.log(token);
    res.status(200).send({ user: newUser.username, token });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    if (req.user) {
      res.status(200).send({ user: req.user.username });
    } else {
      const user = await User.findByCredentials(
        req.body.username,
        req.body.pass
      );
      res.status(200).send({ user: user.username });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    if (req.user) {
      await User.findByIdAndUpdate(req.user._id, {
        $set: { [req.body.key]: req.body.value },
      });
      const user = await User.findById(req.user._id);
      res.status(200).send({ user: user.username });
    } else {
      throw new Error();
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    if (req.user) {
      await User.findByIdAndDelete(req.user._id);
      res.status(200).send({ message: "Successfully deleted user" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
