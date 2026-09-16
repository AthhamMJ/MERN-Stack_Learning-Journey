import { json } from "body-parser";
import student from "../model/subjectModel"

export const createSubject = async(res, req) => {
    try{
        const {subjectName, subjectCode, credit} = req.body;

        const existSubject = await subject.findOne({subjectCode})

        if(existSubject){
            return res.status(404).json({
                message: "Subject Already Exists"
            })
        }

        return
            res.status(200).json({
                message: "User Created Successfully"
            })
    
    }catch(error){
        return res.status(500).json({
            message: "Internal SErver Error",
            error: error.message
        })
    }
}

export const getSubjects = async (req, res) => {
    
    try{
        const subjectData = await subject.find();

        return res.ststus(200).json(subjectData)

    
    }catch(error){
        return res.json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

// export const getSubject =  async (req, res)