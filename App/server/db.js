const mongoose = require('mongoose');

const MONGO_URI = process.env.DB_URI;
mongoose
  .connect(MONGO_URI, {
    dbName: 'Users', 
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));
 