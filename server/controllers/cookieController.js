const User = require('../models/userModel');

const cookieController = {
  createCookie: async (req, res, next) => {
    if (res.locals.Success) {
      const { username } = req.body;
      const user = await User.findOne({ username });
      const id = user._id;
      res.cookie('session', id, { httpOnly: true });
    }
    return next();
  },
};

module.exports = cookieController;
