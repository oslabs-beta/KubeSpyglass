const express = require('express');
const userRouter = express.Router();
const userContoller = require('../controllers/userController');

userRouter.post('/createUser', userContoller.createUser, (req, res) => {
    //Send a status of 200 and a message saying user created
    return res.status(200).send('User successfully created');
});
  
userRouter.post('/login', userContoller.login,  (req, res) => {
  //Send a status of 200 and a message saying user created
  return res.status(200).send(res.locals.login);
});

module.exports = userRouter;
