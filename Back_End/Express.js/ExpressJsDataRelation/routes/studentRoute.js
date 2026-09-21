import express from 'express'

import{
    createStudent,
    getStudents,
    getStudent,
    updateStudent,
    deleteStudent
} from "../controller/studentController.js"

const routeStudent = express.Router()

routeStudent.post("/createStudent", createStudent)
routeStudent.get("/", getStudents)
routeStudent.get("/:registrationNumber", getStudent)
routeStudent.put("/:registrationNumber", updateStudent)
routeStudent.delete("/:registrationNumber", deleteStudent)

export default routeStudent