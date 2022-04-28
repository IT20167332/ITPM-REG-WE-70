const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const conductor = new Schema({
  conductorName: {
    type: String,
  },

 conductorNIC: {
    type: String,
  },

conductorId: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
});

module.exports = mongoose.model("conductor", conductor);