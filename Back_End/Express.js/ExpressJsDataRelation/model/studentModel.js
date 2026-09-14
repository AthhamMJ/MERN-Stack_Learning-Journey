import mongoose from "mongoose"

const studentSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: [true, "StudentName is Required"],
            trim: true
        },
        email:{
            type: String,
            required: [true, "StudentName is Required"],
            unique: true,
            lowercase: true,
            trim: true

        },
        registrationNumber:{
            type: String,
            required: true,
            unique: true,
            trim: true
        },
        course:{
            type: String,
            required: [true, "Student course is required"]
        }
    },
    {
        timestamps: true
    }
);

const student = mongoose.model("student", studentSchema);
export default student;