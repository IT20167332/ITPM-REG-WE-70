const categoryData = require('../models/category_model');

addCategory = (req,res,next) => {
    console.log(req.body.category);
    if(req.body.category==null || req.body.category==""){
        return(
            res.status(500).send({error:"Plese enter category"})
        )
    }
    categoryData.create(
        {
            category:req.body.category
        }

    ).then((categoryData) =>{
        res.status(200).send(categoryData);
    }).catch(next)
}

deleteCategory = async(req,res,next) =>{
    const id = req.params.id;
    console.log(id);
    categoryData.deleteOne({_id:id})
    .then((sta)=>{
        res.status(200).send(sta);
    }).catch(next)
}
getCategory = async(req,res) =>{
    
    categoryData.find({visible:true})
    .then((categoryData)=>{
        res.status(200).send(categoryData);
    })
    .catch((err)=>{
        res.status(500).send({status: "Error", error: err.message});
    })
}
getAllCategory = async(req,res) =>{
    
    categoryData.find().sort({category:1})
    .then((categoryData)=>{
        res.status(200).send(categoryData);
    })
    .catch((err)=>{
        res.status(500).send({status: "Error", error: err.message});
    })
}
    

module.exports = {
    addCategory,
    deleteCategory,
    getCategory,
    getAllCategory 
}