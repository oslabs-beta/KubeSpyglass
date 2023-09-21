const express = require('express');
const metricRouter = express.Router();


/**
 * Get the relevant metrics and send them back
 */
messageRouter.get('/getMetric',  (req, res) => {
  //Send a status of 200 and the res.locals.messages as a json
  return res.status(200).send(res.locals.message);
});
