import express from 'express'
import {setExam} from '../controller/examResultsController.js'

const routeExamResults = express.Router()

routeExamResults.post('/', setExam)

export default routeExamResults