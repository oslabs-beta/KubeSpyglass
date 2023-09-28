const express = require('express');
const metricRouter = express.Router();
const installContoller = require('../controllers/installcontroller');

/**
 * Get the relevant metrics and send them back
 */
metricRouter.get(
  '/start',
  installContoller.installPrometheus,
  installContoller.promStart,
  installContoller.portForward,
  (req, res) => {
    //Send a status of 200 and the res.locals.messages as a json
    return res.status(200).send('all set');
  }
);

module.exports = metricRouter;
