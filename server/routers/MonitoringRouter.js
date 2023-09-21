const express = require('express');
const MonitoringRouter = express.Router();
const MonitorController = require('../controllers/MonitorController'); 

MonitoringRouter.get('/metrics/:url', MonitorController.getMetrics, (req, res) => {
  res.status(200).send(res.locals.metrics_data);
});

MonitoringRouter.get('/structure', MonitorController.getStructure, (req, res) => {
  res.status(200).send(res.locals.structure_data);
});

module.exports = MonitoringRouter;