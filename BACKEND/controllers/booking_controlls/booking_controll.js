const bookingData = require('../../models/booking_model/booking_model');

addNewBooking = (req,res) =>{
    // let seate = req.body.SeatNo
    // console.log(req.body.SeatNo);
    //timeTable : req.body.timeTable
    bookingData.create({
        busId : req.body.busId,
        SeatNo : req.body.SeatNo,
        travelDate : req.body.travelDate,
        passengerId : req.body.passengerId,
        paymentValidity : req.body.paymentValidity, 
        timeTable : req.body.timeTable
    })
    .then((bookingData)=>{
        res.status(200).send(bookingData);
    })
    .catch((err)=>{
        res.send(500).send({status:"Error with update like!",error: err.message});
    })
    //add new file
}

deleteBooking = async(req,res) =>{
    var id = req.params.id;

    bookingData.deleteOne({_id:id})
    .then((data)=>{
        res.status(200).send(data);
    })
    .catch((error)=>{
        res.status(400).send(error);
    });
}
//.populate({path: "timeTable",select:['rout','fromTime','toTime','from','to']})
getBookingById = async(req,res) =>{
    var id = req.params.id;

    bookingData.find({passengerId:id})
    
    .then((data)=>{
        res.status(200).send(data);
    })
    //.populate({path:"timeTable",select:['rout','fromTime','toTime','from','to']})
    .catch((error)=>{
        res.status(400).send(error);
    });
}

module.exports = {
    addNewBooking,
    deleteBooking,
    getBookingById
}