const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

const messageRouter = require('./Routers/metricRouter');

app.use(express.json());

/**
 * enable use of cors to communicate with front end
 */
const cors = require('cors');
app.use(cors());

/**
 * On start up display main page
 */
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

/**
 * allow access to router
 */
app.use('/', metricRouter);


/**
 * Global Error Handler
 */
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});
/**
 * Confirm listening on correct port
 */
app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

module.exports = app;     