const User = require('../models/userModel');
const Session = require('../models/sessionModel');

const cookieController = {
  createCookie: async (req, res, next) => {
    console.log("Hello let us cookie");
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

  getCookie: async (req, res, next) => {
    try {
      const cookie = req.cookies.session;
      res.locals.cookie = cookie;
      return next();
    } catch (err) {
      return next({
        log: `userController.getCookie ERROR : ${err}`,
        message: {
          err: 'userController.getCookie ERROR',
        },
      });
    }
  },
};

module.exports = cookieController;
