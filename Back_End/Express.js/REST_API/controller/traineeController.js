import trainee from "../model/traineeModel.js"

export const getAllData = async(req, res) =>{
    try{
        const traineeData = await trainee.find()

        return res.status(200).json({
            message: `Trainee Data`,
            traineeData: (traineeData)
        })
    }catch(error){
        return res.status(500).json({
            message: `Internal Server Error`,
            error: error.message
        })
    }
}