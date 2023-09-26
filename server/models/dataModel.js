const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dataSchema = new Schema({
  userId: {type: Schema.Types.ObjectId}, 
  data: {type: Schema.Types.Mixed}, 
  time: Date
});

const Data = mongoose.model('Data', dataSchema);

module.exports = Data;