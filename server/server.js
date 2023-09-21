const express = require('express');
const path = require('path');
const MonitoringRouter = require('./routers/MonitoringRouter');

const app = express();
const PORT = 3000;

app.use(express.json());

// route handler to respond with main app
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.use('/monitoring', MonitoringRouter);

app.listen(PORT, () => console.log(`server is listening on port ${PORT}`));

module.exports = app;