const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const steamsSchema = new Schema({
  streamTitle : {
    type : String,
    required : true
  },
  streamDescription : {
    type : String,
    required : true
  },
  createdBy : {
    type : String,
    required : true
  }
},
{ timestamps : true });

module.exports = mongoose.model('stream', steamsSchema);