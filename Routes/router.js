const express=require('express')
const { getStudents, register } = require('../Controllers/studentController')
const router=new express.Router()
register

router.post('/register',register)
router.get('/all-students',getStudents)

module.exports=router