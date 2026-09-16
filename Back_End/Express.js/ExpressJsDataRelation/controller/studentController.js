import student from "../model/studentModel.js";

export const  createStudent = async(req, res) => {
    try{
        const {name, email, registrationNumber, course} = req.body;

        const existRegno = await student.findOne({registrationNumber});

        if(existRegno){
            return res.status(409).json({
                message: 'User Already Exists'
            })
        }

        const studentData = new student ({name, email, registrationNumber, course})
        
        const newStudent = await studentData.save()

        return res.status(201).json({
            message: "Student Created Successfully",
            student: newStudent
        })

    }catch(error){
         return(
            res.status(500).json({
                message: 'Internal Server Error'
            })
        )
    }
}

// let us to getall Data

export const getStudents = async (req, res) => {
    try {
        const students = await student.find()

        return res.status(200).json(students)

    } catch(error){
        return res.status(500).json({
            message: 'Internal Server.Error',
            error: error.message
        })
    }
}

// get the data by id

export const getstudent = async(req, res) => {
    try{
        const studentData = await student.findById(req.param.id)

        if (!studentData) {
            return res.status(404).json({
                message: "Studnet not found"
            })
        }
        
        return res.status(200).json(studentData)
    
    }catch(error) {
        return res.status(500).json({
            message: "Internal SErver Error",
            error: error.message
        })
    }
}

export const updateStudent = async(req, res) => {
    try{

        const updatedStudent = await student.findByIdAndUpdate(
            req.param.id,
            req.body,
            { new: true }
        )

        if(!updatedStudent){
            return res.status(404).json({
                message: "Student not found"
            })

        return res.status(200).json({
            message: "Student Created Successfully",
            student: updatedStudent
        })
        }
    
    }catch(error){
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export const deleteStudent = async (req, res) => {
    try{
        const deletedStudent = await student.findByIdAndDelete(
            req.params.id
        )

        if(!deleteStudent){
            res.status(404).json({
                message: "Student not Found bro"
            })
        }

        return res.status(200).json({
            message: "Student Created Successfully",
        })
    
    }catch(error){
        res.status(500).json({
            message: "Internal Server error",
            error: error.message
        })
    }
}