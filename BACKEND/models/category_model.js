const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new mongoose.Schema({
    category:{
        type:String,
        require:[true,"category is require!"],
        unique:[true,'this category allredy added']
    },
    visible:{
        type:Boolean,
        default:true
    }
});

const categoryD = mongoose.model('category',categorySchema);
module.exports = categoryD;