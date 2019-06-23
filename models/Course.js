const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CourseSchema = new Schema({
    courseid:{
      type:String
    },
    course_name: {
        type: String
    },
    discription: {
        type: String
    },
    status: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now()
    }
})

module.exports = Course = mongoose.model('courses', CourseSchema)
