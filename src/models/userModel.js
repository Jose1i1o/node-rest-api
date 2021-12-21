const mongoose = require("mongoose");
const {
  isEmail
} = require('validator');

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: [true, "A username is required"],
  },
  email: {
    type: String,
    required: [true, "The email is required"],
    trim: true,
    unique: true,
    validate: {
      validator: (value) => isEmail(value),
      message: (props) => `The email ${props.value} is not valid`,
    },
  },
  password: {
    type: String,
    required: [true, "The password is required"],
    minlength: [8, "The password is too short"],
  },
  isAdmin: {
    type: Boolean,
    default: false,
  }
}, {
  timestamps: true
}, );

const userModel = mongoose.model("users", userSchema);

module.exports = userModel;