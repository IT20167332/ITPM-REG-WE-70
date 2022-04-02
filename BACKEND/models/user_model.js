const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({
    name:{
        type: String,
        required: [true,'Name is required!']    
    },
    email:{
        type: String,
        unique:[true,"email must be unique!"],
        required: [true,'email is required!']
    },
    password:{
        type: String,
        required:[true, "password required!"]
    },
    address:{
        type: String
    },
    postalCode:{
        type:String
    },
    phoneNumber:{
        type:Number
    }

});

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.comparePassword = async function(yourPassword){
    return await bcrypt.compare(yourPassword, this.password);
}

const user = mongoose.model('users',userSchema);
module.exports = user;

/* 
   {
    "name":"test-1-name",
    "userName":"test_1_username",
    "password":"test_1_password",
    "address":"test_1_address",
    "postalCode":"test_1_addresspostalCode",
    "phoneNumber":1234

   }
   */