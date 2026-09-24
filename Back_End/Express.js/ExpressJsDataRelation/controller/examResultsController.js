import subject from "../model/subjectModel.js"
import student from '../model/studentModel.js'
import examResults from '../model/examResultsModel.js'
import gradeCalculate from '../utils/calculateGrade.js'

export const setExam = async(req, res) => {
    try{
        const {registrationNumber, subjectCode, marks, date} = req.body

        const studentExist = await student.findOne({registrationNumber})
        const subjectExist = await subject.findOne({subjectCode})

        if(!studentExist){
            return res.status(404).json({
                message: "Student doesn't exist"    
            })
        }
        if(!subjectExist){
            return res.status(404).json({
                message: "Subject doesn't exist"    
            })
        }

        const grade = gradeCalculate(marks);

        const examData = new examResults({registrationNumber, subjectCode, marks, grade, date})

        const newExam = await examData.save()

        return res.status(201).json({
            message: "Exam Data Created Successfully",
            ExamData: newExam
        })

    }catch(error){
        return res.status(500).json({
            message: "Internal Server Error",
            error : error.message
        })
    }
}

export const getExamDetails = async(req, res) => {
    try{
        const examDetails = await examResults.find()

        return res.status(200).json({
            message: "Here is the whole Exam Details",
            ExamDetails: examDetails
        })

    }catch(error){
        return res.status(500).json({
            message: "Internal SErver Bug",
            error: error.message
        })
    }
}

export const updateExam = async(req, res) => {
    try{
        const{registrationNumber} = req.params
        const{subjectCode} = req.params


        const newExam = await examResults.findOneAndUpdate(
            {registrationNumber},
            {subjectCode},
            req.body,
            { new: true }
        )

        return res.status(200).json({
            message: "Student Created Successfully"
        })

    }catch(error){
        return res.staus(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}