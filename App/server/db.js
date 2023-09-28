const mongoose = require('mongoose');

//User name: TonsaUsers
//Pass: AWholeLot
const MONGO_URI = process.env.DB_URI;
mongoose
  .connect(MONGO_URI, {
    dbName: 'Users', 
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));
