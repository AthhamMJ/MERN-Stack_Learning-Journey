import mongoose from "mongoose";

const subjectSchema = new mongoose.Schema(
    {
        subjectName:{
            type: String,
            required: [true, "SubjectName is Required"],
            trim: true
    },
        subjectCode:{
            type: String,
            required: [true, "SubjectCode is Required"],
            unique: true,
            uppercase: true,
            trim: true
    },
        credit:{
            type: Number,
            required: [[true, "Credit is Required"]]
    }

    },
    {
        timestamps: true
    }
);

const subject = mongoose.model("subject", subjectSchema);
export default subject;