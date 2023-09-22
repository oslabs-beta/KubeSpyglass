
const User = require('../models/userModel');

const userController = {
   
    createUser: async (req, res, next) => {
        const { username, email, password } = req.body;
        try {
            const { username, email, password } = req.body;
            const newUser = await User.create({
              username,
              email,
              password,
            });
            res.locals.user = newUser;
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