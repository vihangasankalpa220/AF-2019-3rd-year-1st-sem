var express = require("express")
var cors = require("cors")
var bodyParser = require("body-parser")
var app = express()
var mongoose = require("mongoose")
const fileUpload = require('express-fileupload');

var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)

//const mongoURI='mongodb+srv://asiri:asiri123@cluster0-lok9v.mongodb.net/test'
const mongoURI='mongodb://localhost:27017/afproject'

mongoose.connect(mongoURI,{useNewUrlParser:true})
    .then(()=>console.log("MongoDB Connected"))
    .catch(err=>console.log(err))


var Users = require('./routes/Users')

app.use('/users', Users)




var Courses=require('./routes/Courses')

app.use('/courses',Courses)


var Student = require('./routes/students')

app.use('/students', Student)



app.listen(port, () => {
   console.log("Server is running on port: " + port)
})
