
const modelData = require('../models/product_model')
const likeData = require('../models/like_model')

const fs = require('fs')


addProduct = (req,res,next) =>{
    const tag = req.body.tag
    const tagarray = tag.split(",")
    console.log({array:tagarray})
    modelData.create(
        {
            title: req.body.title,
            description: req.body.description,
            availability: req.body.availability,
            productImage: req.file.path,
            drowingType: req.body.drowingType,
            category: req.body.category,
            size: req.body.size,
            board: req.body.board,
            price: req.body.price,
            tag: tagarray
        }
    ).then(function(modelData){
        res.send(modelData);
    }).catch(next);
};

getTopFive = async (req,res) =>{
    var count = req.params.count;
    console.log("count = "+count );
    modelData.find().sort({likes:-1}).limit(parseInt(count))
    .then(function(modelData){
      res.status(200).send({status: "product fetched",modelData});  
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error", error: err.message});
    });
}


getForDrawing = async (req,res) =>{
    var category = req.params.category;
    console.log("category = "+category );
    if(category == "ALL"){
        modelData.find()
        .then(function(modelData){
        res.status(200).send({status: "product fetched",modelData});  
        }).catch((err) =>{
            console.log(err.message);
            res.status(500).send({status: "Error", error: err.message});
        });
    }else{
        //----------------Search function------------------
        modelData.find({tag:category})
        .then(function(modelData){
            res.status(200).send({status: "product fetched",modelData});  
        }).catch((err) =>{
            console.log(err.message);
            res.status(500).send({status: "Error", error: err.message});
        });
    } 
}

viewUpdate = async (req,res) =>{
    const productId = req.params.id;
    const plus = parseInt(req.body.plus);
    console.log(productId);
    console.log(req.body);

    //in hear like = view
    const update = await modelData.findByIdAndUpdate(productId,{$inc:{views:plus}})
    .then(() =>{
        console.log("view updated!");
        res.status(200).send({status:"view update!"});

    })
    .catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with update view!",error: err.message});
    })
}
getForTable = async(req,res) =>{
    var sort = parseInt(req.params.sort) 
    var type =  req.params.type
    var qury = {title:sort}
    console.log(`{${type}:${sort}}`)
    modelData.find().sort(qury)
    .then(function(modelData){
    
    res.status(200).send({status: "product fetched",modelData});  
    }).catch((err) =>{
        console.log(err.message);
        res.status(500).send({status: "Error", error: err.message});
    });
}
deleteProduct = async(req,res,next)=>{
    var id = req.body.id
    var path = req.body.path
    console.log(req.body)
    modelData.deleteOne({_id:id})
    .then((data)=>{ 
        res.status(200).send({data:data})
    })
    .catch(next)
    console.log("it work!")
    likeData.deleteMany({productID:id})
    .then((data2)=>{ 
        fs.unlink(path, (err) => {
            if (err) {
              console.error(err)
            }else{
               console.log({imageRemove:path})
            }
          
            //file removed
          })
        console.log({data:data2})
    })
    .catch(next)
}
updateProduct = async(req,res,next)=>{
    //console.log(req);
    const id = req.body.id
    const tag = req.body.tag
    const tagarray = tag.toString().split(",")
    const product= {
        
        description: req.body.description,
        availability: req.body.availability,
        drowingType: req.body.drowingType,
        category: req.body.category,
        size:req.body.size,
        board:req.body.board,
        tag:tagarray,
        price:req.body.price,
        title:req.body.title
    }
    modelData.updateOne({_id:id},product)
    .then(function(modelData){ 
        res.send(modelData);
    }).catch(next);

}


module.exports = {
    addProduct,
    getTopFive,
    viewUpdate,
    getForDrawing,
    getForTable,
    deleteProduct,
    updateProduct
};