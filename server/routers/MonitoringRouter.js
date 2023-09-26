const express = require('express');
const MonitoringRouter = express.Router();
const MonitorController = require('../controllers/MonitorController');
const DBController = require('../controllers/DBController');

MonitoringRouter.get('/metrics/:url', MonitorController.getMetrics, DBController.storeData, (req, res) => {
  res.status(200).send(res.locals.metrics_data);
});

MonitoringRouter.get('/structure/:url', MonitorController.getStructure, (req, res) => {
  res.status(200).send(res.locals.structure_data);
});

MonitoringRouter.get('/metrics_data', DBController.getData, (req, res) => {
  res.status(200).send(res.locals.results);
})

module.exports = MonitoringRouter;