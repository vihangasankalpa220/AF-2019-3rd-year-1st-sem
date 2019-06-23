const express = require("express")
const users = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const  nodemailer= require('nodemailer')
const User = require("../models/User")
users.use(cors())

process.env.SECRET_KEY = 'secret'




users.post('/admininsert', (req, res) => {
    const today = new Date()
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        role:req.body.role,
        created: today
    }

    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.email + 'Admin registered!' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: 'Admin already exists' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})




users.post('/studentinsert', (req, res) => {
    const today = new Date()
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        role:req.body.role,
        created: today
    }

    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.email + 'Student registered!' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: 'Student already exists' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})


users.post('/instructor', (req, res) => {
    const today = new Date()
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        role:req.body.role,
        created: today
    }

    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.email + 'Student registered!' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: 'Student already exists' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })

    nodemailer.createTestAccount((err,account)=>{
        const htmlEmail='<h3>Contact Details</h3> ' +
            '<ul><li>first_name:${req.body.first_name}</li>' +
            '<h3>Message</h3>'+
            ' <p>${req.body.role}</p>'

        let transporter=nodemailer.createTransport({
            host:'smtp.ethereal.email',
            port:587,
            auth:{
                user: 'blair78@ethereal.email',
                pass: '26ewknsqzAsZbVVMKa'
            }
        })

        let mailOptions={
            from:'vihanga@testaccount.com',
            to: 'blair78@ethereal.email',
            replyTo:'vihanga@testaccount.com',
            subject:'New Message',
            text:req.body.first_name,
            html:htmlEmail
        }


        transporter.sendMail(mailOptions,(err,info)=>{
            if(err){
                return console.log(err)
            }

            console.log('Message sent: %s,info.message')
            console.log('Message URL:%s',nodemailer.getTestMessageUrl(info))
        })

    })


})








users.post('/register', (req, res) => {
    const today = new Date()
    const userData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password,
        role:req.body.role,
        created: today
    }

    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (!user) {
                bcrypt.hash(req.body.password, 10, (err, hash) => {
                    userData.password = hash
                    User.create(userData)
                        .then(user => {
                            res.json({ status: user.email + ' registered!' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: 'User already exists' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

users.post('/login', (req, res) => {
    User.findOne({
        email: req.body.email
    })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    const payload = {
                        _id: user._id,
                        first_name: user.first_name,
                        last_name: user.last_name,
                        email: user.email,
                        role: user.role
                    }
                    let token = jwt.sign(payload, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token).status(200);
                } else {
                    res.json({ error: "User does not exist" }).status(404);
                }
            } else {
                res.json({ error: "User does not exist" }).status(404);
            }
        })
        .catch(err => {
            res.send('error: ' + err).status(404);
        })
})

users.get('/profile', (req, res) => {
    var decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

    User.findOne({
        _id: decoded._id
    })
        .then(user => {
            if (user) {
                res.json(user)
            } else {
                res.send("User does not exist")
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})

module.exports = users
