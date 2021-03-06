const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');



const admin = require('./routers/admin_router');
const bus = require('./routers/busRouter/busRouter');

const booking = require('./routers/booking_routers/booking_router');
const timetable = require('./routers/booking_routers/timeTable_router');
const driver = require("./routers/Employeemagement_router/driver_router");
const conductor = require("./routers/Employeemagement_router/conductor_router");



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

app.use('/api/booking',booking);
app.use('/api/timetable',timetable);
app.use('/api/booking', booking);
app.use('/api/driver', driver);
app.use('/api/conductor', conductor);

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