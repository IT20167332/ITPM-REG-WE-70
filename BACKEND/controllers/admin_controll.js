const adminData = require('../models/admin_model');

AddAdmin = (req,res) =>{
    adminData.create({
        name: req.body.name,
        userName: req.body.userName,
        email:req.body.email,
        password:req.body.password

    })
    .then((adminData)=>{
        res.status(200).send(adminData);
    })
    .catch((err)=>{
        res.send(500).send({status:"Error with update like!",error: err.message});
    })
}
signin = async (req,res,next) =>{
    try{
        const {userName,password} = req.body;
        if(!userName || !password){
            return res.status(400).json({
                success: false,
                message: "userName and password are required"
            })
        }
        const user = await adminData.findOne({userName});
        
        if(!user){
            return res.status(400).json({
                success: false,
                message:"user not found"
            })
        }
        console.log(user);
        //verify password and 
        const isMatched = await user.comparePassword(password);
        if(!isMatched){
            return res.status(400).json({
                success: false,
                message:"password Invalid"
            })
        }
        res.status(200).json({
            success:true,
            id: user._id,
            name: user.name
        })


    }catch(error){
        console.log(error)
        return res.status(400).json({
            success: false,
            message:"cannot login, check your credentials"
        })
    }
}

checkAdmin = async(req,res,next)=>{
    try {
        const id = req.body.id

        if(!id){
            return res.status(400).json({
                success: false,
                message: "Admin id need"
            })
        }
        const user = await adminData.find({_id:id});
        if(!user){
            return res.status(400).json({
                success: false,
                message: "Admin id need"
            })
        }else{
            res.status(200).json({
                success:true,
                id: user._id,
                name: user.name
            })
        }

    } catch (error) {
        console.log(error)
        return res.status(400).json({
            success: false,
            message:"cannot login, check your credentials"
        })
    }
}
module.exports ={
    AddAdmin,
    signin,
    checkAdmin
}