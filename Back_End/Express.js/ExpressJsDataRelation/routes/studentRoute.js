import express from 'express'

import{
    createStudent,
    getStudents,
    updateStudent,
    deleteStudent
} from "../controller/studentController.js"

const route = express.Router()

route.post("createStudents", create)
route.get("/getAllStudents", getAllData)