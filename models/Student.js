const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
   _id: mongoose.Schema.Types.ObjectId,
   first_name: String,
   last_name: String,
   nameInFull: String,
   nic: String,
   contactNo: String,
   currentYear: {
      type: Number,
      default: 1
   },
   currentSemester: {
      type: Number,
      default: 1,
   },
   faculty: String,
   subjects: [String],
   gpa: {
      type: Number,
      default: 0
   },
   email: String,
   password: String,
   role: String,
});

module.exports = mongoose.model('Student', studentSchema);
