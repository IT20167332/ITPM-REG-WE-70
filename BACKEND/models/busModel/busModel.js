const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const busSchema = new mongoose.Schema({

    regNo:{
        type:String,
        required:[true,"register Number is required"],
        unique:[true,"regNo must be unique"]
    },
    busRoute:{
        type:String,
        required:[true,"the route is required"]
    },
    noOfSeats:{
        type:Number,
        required:[true,"no of seats is required"]
    },
    details:{
        type:String,
        required:[true,"additional details is required"]
    }
});

const bus = mongoose.model('Busses',busSchema);
module.exports = bus;