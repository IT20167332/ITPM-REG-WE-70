const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new mongoose.Schema({
    busId: {
        type:String,
        required:[true,"name is requird!"]
    },
    SeatNo:{
        type:[Number]
    },
    bookingDate:{
        type:Date,
        default: Date.now
    },
    travelDate:{
        type:Date
    },
    passengerId:{
        type:String,
        required:[true,"passengerId requird!"]
    },
    paymentValidity:{
        type:Boolean
    },
    timeTable:{
        type: mongoose.Schema.Types.ObjectId, ref: "timeTs"
    }
      
});

const booking = mongoose.model('Booking',bookingSchema);
module.exports = booking;