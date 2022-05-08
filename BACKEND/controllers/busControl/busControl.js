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

    getData = async(req,res)=>{
        busData.find()
        .then((busData)=>{
            res.status(200).send(busData);
        })
        .catch((err)=>{
            res.status(400).send(err);
        })
        
    }

    getDataById = async(req,res)=>{
        let id = req.params.id;
        busData.find({_id:id})
        .then((busData)=>{
            res.status(200).send(busData);
        })
        .catch((err)=>{
            res.status(400).send(err);
        })
        
    }

    updateBus = async(req,res)=>{
        let id= req.params.id;
        let {getData}= req.body;
        const updateDate = {
            getData
        }
       busData.findByIdAndUpdate(id,getData)
       .then(()=>{
           res.status(200).send({status: "updated successfull"})
       })
       .catch((err)=>{
        res.status(400).send(err);
       })

    }

    deleteBus = async(req,res)=>{
        var id = req.params.id;

        busData.deleteOne({_id:id})
        .then((data)=>{
            res.status(200).send(data);
        })
        .catch((error)=>{
            res.status(400).send(error);
        });
    }
module.exports ={
    AddBus,
    getData,
    updateBus,
    getDataById,
    deleteBus
}
