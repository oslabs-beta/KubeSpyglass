const express = require('express');
const path = require('path');
const dashboardController = require('./controllers/dashboardController');

const app = express();
const PORT = 3000;

app.use(express.json());

// route handler to respond with main app
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.get('/dashboard', dashboardController.getIFrames, (req, res) => {
  res.status(200).send();
});

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

module.exports = app;
