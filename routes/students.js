const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const Student = require('../models/Student');

//Get all students
router.get('/', (req,res,next)=>{
   Student.find()
       .exec()
       .then(doc=>{
           console.log(doc);
           res.status(200).json(doc);
       })
       .catch(err=>{
            console.log(err);
            res.status(500).json({
                error: err
            });
       });
});

//Add a Student
router.post('/studentInsert', (req, res, next)=>{
   const student = new Student({
       _id: new mongoose.Types.ObjectId,
       first_name: req.body.first_name,
       last_name: req.body.last_name,
       nameInFull: req.body.nameInFull,
       nic: req.body.nic,
       contactNo: req.body.contactNo,
       faculty: req.body.faculty,
       email: req.body.email,
       password: req.body.password,
       role: req.body.role
   });
   student.save()
       .then(result=>{
           console.log(result);
           res.status(200).json({
               newStudent: student
            });
        })
       .catch(err=>{
           console.log(err);
           res.status(500).json({
               error: err
           });
       });
});

//Get a Student by id
router.get('/:userId', (req,res,next)=>{
    const id = req.params.userId;
    Student.find({userId: id})
        .exec()
        .then(doc=>{
            console.log(doc);
            if(doc){
                res.status(200).json(doc);
            }else{
                res.status(404).json({
                    message: 'No valid entry found for provided id'
                });
            }
          // res.status(200).json(doc);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

});

//Update a Student
router.patch('/:userId', (req,res,next)=>{
    const id = req.params.userId;
    const updateOps = {};

    for(const ops of req.body){
        updateOps[ops.propName] = ops.value;
    }

    Student.update({userId: id}, {$set: updateOps})
        .exec()
        .then(result=>{
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err=>{
        console.log(err);
        res.status(500).json({
            error: err
        });
    });

});

//Delete a Student
router.delete('/:userId', (req,res,next)=>{
    const id = req.params.userId;

    Student.remove({userId: id})
        .exec()
        .then(result=>{
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err=>{
            console.log(err);
            res.status(500).json({
                error: err
            });
        });

});



module.exports = router;
