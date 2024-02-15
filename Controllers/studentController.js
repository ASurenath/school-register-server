const students = require('../Models/studentModel')

exports.register = async (req, res) => {
    console.log("inside register controller");
    const { firstName, lastName, address, email, gender, mobile, password, dob, course } = req.body
    // console.log(req.body);
    // console.log(firstName, lastName, address, email, gender, mobile, password, dob, course );
    try {
        // console.log("step1");
        const existingStudent = await students.findOne({ email })
        // console.log("step2");
        console.log("Existing student:", existingStudent)
        if (existingStudent) {
            res.status(406).json("Email already registered with us.")
        }
        else {
            console.log("step3");
            const newStudent = new students({firstName,lastName,address,email,gender,mobile,password,dob,course })
            await newStudent.save()
            console.log(newStudent);
            res.status(200).json(newStudent)
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}
exports.getStudents = async (req, res) => {
    console.log("inside get all students controller");
    try {
        const allStudents = await students.find()
        res.status(200).json(allStudents)
    }
    catch (err) {
        res.status(401).json(err)
    }
}