const User = require('../models/User.model');

const getUser = async (req, res) => {
  console.log('hello')
  try {
    const [users] = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  getUser
}