import student from "../model/studentModel.js";

export const  createStudent = async(req, res) => {
    try{
        const {name, email, registrationNumber, course} = req.body;

        const studentData = new student (req,body)

        const existRegno = await student.findOne({registrationNumber});

        if(existRegno){
            return res.status(409).json({
                message: 'User Already Exists'
            })
        }
        
        const newStudent = await studentData.save()
    }catch(error){
        return(
            res.status(500).json({
                message: 'Internal Server Error'
            })
        )
    }
}