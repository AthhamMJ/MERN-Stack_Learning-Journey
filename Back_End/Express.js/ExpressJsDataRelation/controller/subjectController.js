import subject from "../model/subjectModel.js"

export const createSubject = async(req, res) => {
    try{
        const {subjectName, subjectCode, credit} = req.body;

        const existSubject = await subject.findOne({subjectCode})

        if(existSubject){
            return res.status(409).json({
                message: "Subject Already Exists"
            })
        }

        const subjectData = new subject({subjectName, subjectCode, credit})

        const newSubject = await subjectData.save()

        return res.status(200).json({
                message: "Subject Created Successfully",
                subject: newSubject
            })
    
    }catch(error){
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export const getSubjects = async (req, res) => {
    
    try{
        const subjectData = await subject.find();

        return res.status(200).json({SubjectData: subjectData})

    
    }catch(error){
        return res.json({
            message: "Internal Server Error",
            error: error.message
        })
    }
}

export const getOneSubject =  async (req, res) => {
    
    try{
        const {subjectCode} = req.params

        const getSubject = await subject.findOne({subjectCode})

        if(!getSubject){
            return res.status(404).json({
                message: "Subject Data Not Found"
            })
        }

        return res.send(200).json(getSubject)
    
    }catch(error){
        return res.status(500).json({
            message: "Intrnal Server error",
            error: error.message
        })
    }

}

export const updateSubject = async (req, res) => {
    try{
        const {subjectCode} = req.params

        const updatedSubject = await subject.updateOne(
            {subjectCode},
            req.body,
            {new: true}
        )

        if(!updatedSubject){
            return res.status(404).json({
                message: "User not found"
            })
        }

        return res.status(200).json({
            message: "Subject Created Successfully",
            updatedSubject: updatedSubject
        })
    
    }catch(error){
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }
} 

export const deleteSubject = async (req,res) => {
    try{
        const {subjectCode} = req.params

        const deletedSubject = await subject.deleteOne(
            {subjectCode}
        )

        if(!deleteSubject){
            return res.status(404).json({
                message: "User Not Found"
            })
        }
        
        return res.status(200).json({
            message: "Data deleted Successfully"
        })
    
    }catch(error){
        return res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        })
    }

}