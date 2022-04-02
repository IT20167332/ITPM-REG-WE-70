const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required!']
    },
    description: {
        type: String,

    },
    views:{
        type: Number,
        default: 0
    },
    availability:{
        type: Boolean,
        default: true
    },
    productImage: {
        type: String, 
        required: [true, "Image is required!"]
    },
    category:{
        type: String,
        default:"ALL"
    },
    drowingType:{
        type:String,
        default:"ALL"
    },
    size:{
        type:String,
        default:"0 x 0 mm"
    },
    board:{
        type:String,
        default:"All"
    },
    price:{
        type:String
    },
    tag:{
        type:[String]
    }
    
});

const product = mongoose.model('products',productSchema);
module.exports = product;