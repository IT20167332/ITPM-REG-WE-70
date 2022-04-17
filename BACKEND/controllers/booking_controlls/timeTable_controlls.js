const timeData = require('../../models/booking_model/timeTable');

addNewTimeRow = (req,res) =>{
    timeData.create({
        rout : req.body.rout,
        BusId : req.body.BusId,
        price : req.body.price,
        fromTime : req.body.fromTime,
        toTime : req.body.toTime,
        from : req.body.from,
        to : req.body.to,
        seatCountArray : req.body.seatCountArray,
    })
    .then((data)=>{
        res.status(200).send(data);
    })
    .catch((err)=>{
        res.send(500).send(err);
    })
}

getAllTimeRow = async(req,res) =>{
    await timeData.find()
    .populate({path: "BusId",select:['regNo','noOfSeats','details']})
    .then((timeData)=>{
        res.status(200).send(timeData);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
}

getSelectTimeRow = async(req,res) =>{

    let From = req.params.from
    let To = req.params.to
    //let tdate = req.params.date
    //console.log("from = "+From+" : to = "+To)
    
    await timeData.find({from:From,to:To})
    .populate({path: "BusId",select:['regNo','noOfSeats','details']})
    .then((timeData)=>{
        res.status(200).send(timeData);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
}
getSelectTimeById = async(req,res) =>{

    let id = req.params.id
    //let tdate = req.params.date
    //console.log("from = "+From+" : to = "+To)
    
    timeData.find({_id:id})
    .populate({path: "BusId",select:['regNo','noOfSeats','details']})
    .then((timeData)=>{
        res.status(200).send(timeData[0]);
        //console.log(timeData[0])
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
}
updateSeatArray = async(req,res)=>{

    let id = req.body.id
    let array1 = req.body.arr
    timeData.updateOne({_id:id},{$push:{seatCountArray:{ $each:array1}}})
    .then((timeData)=>{
        res.status(200).send(timeData);
    })
    .catch((err)=>{
        res.status(500).send(err);
    })
}

module.exports = {
    addNewTimeRow,
    getAllTimeRow,
    getSelectTimeRow,
    getSelectTimeById,
    updateSeatArray
}