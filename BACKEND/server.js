const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');



const admin = require('./routers/admin_router');
const bus = require('./routers/busRouter/busRouter');



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

app.use('/api/admin',admin);
app.use('/api/busManagement',bus);

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