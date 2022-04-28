const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const driver = new Schema({
  driverName: {
    type: String,
  },

  driverNIC: {
    type: String,
  },

  driverId: {
    type: String,
  },
  contactNumber: {
    type: Number,
  },
});

module.exports = mongoose.model("driver", driver);
