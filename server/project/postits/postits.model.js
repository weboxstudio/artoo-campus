var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postitSchema = new Schema({
  title: String,
  body: String,
  status: {
    type: String,
    default: 'todo',
  },
  dates: {
    createdAt: Date,
    dueAt: Date,
    doneAt: Date,
    inProgressAt: Date,
  },
});

var Postit = mongoose.model('Postit', postitSchema);
module.exports = Postit;