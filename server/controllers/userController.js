
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
    }

}
module.exports = userController;