const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new mongoose.Schema({
    busId: {
        type:String,
        required:[true,"name is requird!"]
    },
    SeatNo:{
        type:Number,
        required:[true,"seat No requird!"]
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
    }
      
});

const booking = mongoose.model('Booking',bookingSchema);
module.exports = booking;