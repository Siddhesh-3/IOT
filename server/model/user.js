const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  temp: {
    type: Number,
    required: true,
  },
  humidity: {
    type: Number,
    required: true,
  },

  motion: {
    type: String,
    required: true,
  },
  light: {
    type: Number,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("IOT", UserSchema);
