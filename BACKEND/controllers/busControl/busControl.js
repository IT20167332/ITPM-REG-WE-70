const busData = require('../../models/busModel/busModel');

AddBus = (req,res) =>{
    busData.create({
        regNo: req.body.regNo,
        busRoute: req.body.busRoute,
        noOfSeats: req.body.noOfSeats,
        details: req.body.details

    })
    .then((busData)=>{
        res.status(200).send(busData);
    })
    .catch((err)=>{
        res.send(500).send({status:"Error with update like!",error:err.message});
    })
}
module.exports ={
    AddBus
}