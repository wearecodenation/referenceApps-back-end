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

exports.login = async (req, res) => {
  try {
    const user = await User.findByCredentials(req.body.username, req.body.pass);
    res.status(200).send({ user: user.username });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error: error.message });
  }
};
