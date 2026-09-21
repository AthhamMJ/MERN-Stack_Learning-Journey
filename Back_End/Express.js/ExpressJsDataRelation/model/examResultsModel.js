import mongoose from "mongoose";

const examResultsShcema = new mongoose.Schema(
    {
        registrationNumber: {
            type: String,
            required: true
        },
        subjectCode: {
            type: String,
            required: true
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
        timestamp: true
    }
)

const examResults = mongoose.model("ExamResults", examResultsShcema);
export default examResults;