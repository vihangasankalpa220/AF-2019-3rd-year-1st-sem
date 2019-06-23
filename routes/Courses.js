const express = require("express")
const courses = express.Router()
const cors = require("cors")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const Course = require("../models/Course")
courses.use(cors())

process.env.SECRET_KEY = 'secret'



courses.post('/courseinsert', (req, res) => {
    const today = new Date()
    const courseData = {
        course_name: req.body.course_name,
        discription: req.body.discription,
        status: req.body.status,
        created: today
    }

    Course.findOne({
        courseid: req.body.courseid
    })
        .then(course => {
            if (!course) {
                bcrypt.hash(req.body.courseid, 10, (err, hash) => {
                    courseData.courseid = hash
                    Course.create(courseData)
                        .then(course => {
                            res.json({ status: course.courseid + 'Course registered!' })
                        })
                        .catch(err => {
                            res.send('error: ' + err)
                        })
                })
            } else {
                res.json({ error: 'Course already exists' })
            }
        })
        .catch(err => {
            res.send('error: ' + err)
        })
})


module.exports = courses