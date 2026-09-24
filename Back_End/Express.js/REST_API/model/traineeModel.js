import mongoose from "mongoose";

const traineeSchema = new mongoose.Schema({
    tid:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})

export default mongoose.model("trainee", traineeSchema)