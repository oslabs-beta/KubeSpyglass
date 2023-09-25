
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const userController = {
   
    createUser: async (req, res, next) => {
        try {
            const { username, email, password } = req.body;
            hashword = await bcrypt.hash(password, 10);
            const newUser = await User.create({
              username,
              email,
              password: hashword,
            });
            return next();
        } catch (err) {
            return next({
                log: 'An error occurred within the createUser found in userController',
                status: 400,
                message: {err: 'An error occurred while trying to create a new user.', }
            });
        }
    },

    login: async (req, res, next) => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ username: username });
            userPass = user.password;
            const passMatch = await bcrypt.compare(password, userPass);
            res.locals.success = passMatch;
            if (passMatch) {
                res.locals.login="Login was successful"
            } else {
                res.locals.login="Username or Password does not match"
            }

            return next();
        } catch (err) {
            return next({
                log: 'An error occurred within the login found in userController',
                status: 400,
                message: { err: 'An error occurred while trying to log in.', }
            });
        }
    },
}
module.exports = userController;