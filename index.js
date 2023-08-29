require("dotenv").config()
const express = require('express');
const bodyParser = require('body-parser');
const route = require('./route/routes.js');
const AWS = require('aws-sdk')
const  mongoose = require('mongoose');
const app = express();
const multer= require("multer");

app.use(bodyParser.json());

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }));
app.use( multer().any())

app.get('/', (req,res)=>{
    res.send("hello world")
})

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true
}) 
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )


app.use('/', route);

app.listen(process.env.PORT || 9000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 9000))
});