//import mongose
const mongoose = require('mongoose');

//define the schema for our event model
const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required:true
        },
  description:{
    type: String,
    required:true
        },
  date: {
    type: Date,
    required:true
        },
  time:{
    type: Number,
    required:true
        },
  location: {
    type: String,
    required:true
        },
  categorie:{
    type: String,
    required:true
        },
  price:{
    type: Number,
    required:true
        },
      dateregistredeb:{
    type: Date,
    required:true
        },
  dateregistrefin:{
    type: Date,
    required:true
        },
});

//create n event model 
const Event = mongoose.model('Event', eventSchema);
//export the event model
module.exports = Event;