const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const timeT_Schema = new mongoose.Schema({
    rout:{
        type:String
    },
    BusId:{
        type: mongoose.Schema.Types.ObjectId, ref: "Busses"
    },
    price:{
        type:Number
    },
    fromTime:{
        type:Date
    },
    toTime:{
        type:Date
    },
    from:{
        type: String
    },
    to:{
        type:String
    },
    seatCountArray:{
        type:[Number]
    }

});
const timeT = mongoose.model('timeTs',timeT_Schema);
module.exports = timeT;