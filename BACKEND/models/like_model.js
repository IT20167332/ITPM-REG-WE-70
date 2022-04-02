const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const likeSchema = new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId, ref: "users"
    },
    productID:{
        type: mongoose.Schema.Types.ObjectId, ref: "products"
    },
    date:{
        type: Date,
        default: Date.now
    }
});

const likeD = mongoose.model('likes',likeSchema);
module.exports = likeD;