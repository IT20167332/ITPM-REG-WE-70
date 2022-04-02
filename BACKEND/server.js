const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const product = require('./routers/product_router');
const user = require("./routers/user_router");
const like = require('./routers/like_router');
const admin = require('./routers/admin_router');
const category = require('./routers/category_router');

const app = express();
const port = process.env.port || 8989;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri);
mongoose.Promise = global.Promise;

const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("MongoDB Connection Success!");
});


app.use(express.json());
app.use(cors());

//------------------------------------------------

app.use('/product',product);
app.use('/api/uploads', express.static('uploads'));//To get uploaded images
app.use('/api/user',user);
app.use('/api/like',like);
app.use('/api/admin',admin);
app.use('/api/category',category);

//------------------------------------------------

app.use(function(err,req,res,next){
    //console.log(err);
    if(err.code==11000){
        res.status(422).send({status: "Error",error:"This category already added!"})
    }
    else{
        res.status(422).send({status: "Error",error:err.message})
    }
    
})


app.listen(port,function(){
    console.log(`The App running on port : ${port}`);
});