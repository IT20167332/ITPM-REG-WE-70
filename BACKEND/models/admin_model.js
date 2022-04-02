const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');


const adminSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"name is requird!"]
    },
    userName:{
        type:String,
        required:[true,"Username required!"],
        unique:[true,"username must be unique"]
    },
    email:{
        type:String
    },
    password:{
        type:String,
        required:[true,"password is required!"]
    }

});

adminSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }this.password = await bcrypt.hash(this.password, 10);
});

adminSchema.methods.comparePassword = async function(yourPassword){
    return await bcrypt.compare(yourPassword, this.password);
}

const admin = mongoose.model('Admins',adminSchema);
module.exports = admin;