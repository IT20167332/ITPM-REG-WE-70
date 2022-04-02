const userData = require("../models/user_model");

addUser = (req,res)=>{
    userData.create({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
        address:req.body.address,
        postalCode:req.body.postalCode,
        phoneNumber:req.body.phoneNumber
    }).then(function(userData){
        res.send(userData);
    }).catch(function(err){
        res.send("error with post!");
    });
}
signin = async (req,res,next) =>{
    try{
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "email and password are required"
            })
        }
        const user = await userData.findOne({email});
        
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
getUser=(req,res,next)=>{
    var id = req.params.id

    userData.find({_id:id},{name:1,email:1,address:1,postalCode:1,phoneNumber:1})
    .then((userdata)=>{
        res.status(200).send(userdata)
    })
    .catch(next)
}
module.exports = {
    addUser,
    signin,
    getUser
};