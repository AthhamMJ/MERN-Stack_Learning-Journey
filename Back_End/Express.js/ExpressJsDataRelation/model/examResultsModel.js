import mongoose from "mongoose";
import { timeStamp } from "node:console";

const examResultsShcema = new mongoose.Schema(
    {
        student: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Student",
            required: true
        },
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Subject",
            required :true
        },
        marks: {
            type: Number,
            required: true,
            min: 0,
            max: 100 
        },
        grade: {
            type: String,
            required: true,
        },
        date: {
            type: Date,
            default :Date.now
        }
    },
    {
        timestamps: true
    }
)

const examResults = mongoose.model("ExamResults", examResultsShcema);

export default examResults;