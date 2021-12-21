const mongoose = require("mongoose");

let typesOfRole = [
  'actor',
  'actress',
  'director',
  'soundtrack composer',
  'writer'
];

const personSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
  },
  dateOfBirth: {
    type: Date,
  },
  placeOfBirth: {
    type: String,
  },
  roles: [{
    type: String,
    enum: typesOfRole,
    default: ["actor"],
    required: true,
  }, ],
}, {
  timestamps: true,
}, );

const personModel = mongoose.model("persons", personSchema);

module.exports = personModel;