const { User } = require("../models");

module.exports = {
  async createUser({ body }, res) {
    const newUser = await User.create(body);

    if (!newUser) {
      return res.status(400).json({ message: "Unable to create matchup" });
    }

    res.status(200).json(newUser);
  },
};
