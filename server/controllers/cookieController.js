const User = require('../models/userModel');
const Session = require('../models/userModel ');

const cookieController = {
    createCookie: async (req, res, next) => {
        //Check to see if a user was successfully found 
    if (res.locals.Success) {
      const { username } = req.body;
      const user = await User.findOne({ username });
      const id = user._id;
      res.cookie('session', id, { httpOnly: true });
      const session = await Session.create({ session: id });
    }
    return next();
  },
};

module.exports = cookieController;
