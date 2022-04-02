const likeData = require('../models/like_model');

addLike = (req,res)=>{
    likeData.create({
        userID:req.body.userID,
        productID: req.body.productID
    })
    .then(function(likeData){
        res.status(200).send(likeData);
    }).catch((err)=>{
        res.status(500).send({status:'error', error: err.message});
    })
}
getLikeCount = async (req,res)=>{
    
    const id = req.params.id;
   

    likeData.count({productID:id},(err,count)=>{
        if(err){
            res.status(500).send({status: "Error", error: err.message});
        }else{
            res.send({count:count});
        }
    })
}

isThisUserLike = async (req,res)=>{
    const uid = req.params.uid;
    const pid = req.params.pid;
    // console.log("uid = "+ uid +"  pid = "+pid);

    likeData.find({productID:pid,userID:uid})
    .then((likeData)=>{
        if(likeData.length > 0 ){
            res.send({status:true});
        }else{
            res.send({status:false});
        }
    })
    .catch(()=>{
        res.send({status:false});
    })
}
deleteLike = async(req,res)=>{
    const uid = req.params.uid;
    const pid = req.params.pid;
    // console.log("uid = "+ uid +"  pid = "+pid);

    likeData.deleteMany({productID:pid,userID:uid})
    .then((sta)=>{
        res.status(200).send(sta);
    })
    .catch((err)=>{
        res.status(500).send({status: "Error", error: err.message});
    })
}
module.exports = {
    addLike,
    getLikeCount,
    isThisUserLike,
    deleteLike
}