const User = require('../models/User.model');

const getUsers = async (req, res) => {
  try {
    const [users] = await User.findAll();
    if (users.length > 0) {
      res.status(200).json(users);
    } else {
      res.status(404).send("no users")
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getUserById = async (req, res) => {
  const id = parseInt(req.params.id);
  if (id) {
    try {
      const [user] = await User.find(id);
      if (user.length > 0) {
        res.status(200).json(user);
      } else {
        res.status(404).send("user not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  } else {
    res.status(404).send("id is not valid")
  }
};

module.exports = {
  getUsers,
  getUserById
}