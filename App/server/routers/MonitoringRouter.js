const express = require('express');
const fs = require('fs');
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

MonitoringRouter.get('/structure/static', (req, res) => {
  try {
    const data = fs.readFileSync(path.resolve(__dirname, '../../dist/assets/sampleStructure.json'), 'utf-8');
    const jsonData = JSON.parse(data);
    res.json(jsonData);
  } catch (error) {
    console.error('Error reading JSON file:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

module.exports = MonitoringRouter;