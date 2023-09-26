
const mongoose = require('mongoose');

//User name: TonsaUsers
//Pass: AWholeLot
const MONGO_URI = `mongodb+srv://TonsaUsers:AWholeLot@cluster0.evdkirk.mongodb.net/`;
mongoose
  .connect(MONGO_URI, {
    dbName: 'Users', 
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));
