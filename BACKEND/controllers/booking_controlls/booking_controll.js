const bookingData = require('../../models/booking_model/booking_model');

addNewBooking = (req,res) =>{
    bookingData.create({
        busId : req.body.busId,
        SeatNo : req.body.seatNo,
        travelDate : req.body.travelDate,
        passengerId : req.body.passengerId,
        paymentValidity : req.body.paymentValidity
    })
    .then((bookingData)=>{
        res.status(200).send(bookingData);
    })
    .catch((err)=>{
        res.send(500).send({status:"Error with update like!",error: err.message});
    })
    //add new file
}

module.exports = {
    addNewBooking
}