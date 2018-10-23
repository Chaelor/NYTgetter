//Require mongoose, make a schema with it too.
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Make a schema for notes
var NoteSchema = new Schema({
  //Article the note belongs to,
  //Body of the Note,
  //Date the Note was created
  articleID: {
    type: String,
    ref: "Article",
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  noteBody: {
    type: String,
    required: true
  }
});

//Make a model(collection) out of the note.
var Note = mongoose.model("Note", NoteSchema);

//Export the note
module.exports = Note;