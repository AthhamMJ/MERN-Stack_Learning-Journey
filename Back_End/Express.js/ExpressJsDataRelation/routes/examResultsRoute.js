import express from 'express'
import {setExam, getExamDetails} from '../controller/examResultsController.js'

const routeExamResults = express.Router()

routeExamResults.post('/', setExam)
routeExamResults.get('/', getExamDetails)

export default routeExamResults