const { User } = require("../models");
const { signToken } = require('../utils/auth')

module.exports = {
  async createUser({ body }, res) {
    const newUser = await User.create(body);

    if (!newUser) {
      return res.status(400).json({ message: "Unable to create user" });
    }

    const token = signToken(newUser)
    res.status(200).json({newUser, token});
  },
};
