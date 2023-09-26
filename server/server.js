const express = require('express');
const path = require('path');
const MonitoringRouter = require('./routers/MonitoringRouter');

const app = express();
const PORT = 4000;

const metricRouter = require('./routers/metricRouter');
const userRouter = require('./routers/userRouter');
const db = require('./db.js');
app.use(express.json());

//app.use('/', db);
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

app.use('/monitoring', MonitoringRouter);

/**
 * allow access to router
 */
app.use('/setup', metricRouter);
app.use('/signup', userRouter);
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
