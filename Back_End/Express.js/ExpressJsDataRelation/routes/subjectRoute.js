import express from 'express'

import {
    createSubject,
    getSubjects,
    getOneSubject,
    updateSubject,
    deleteSubject
} from '../controller/subjectController.js'

const routeSubject = express.Router()

routeSubject.post('/createSubject', createSubject)
routeSubject.get('/', getSubjects)
routeSubject.get('/:subjectCode', getOneSubject)
routeSubject.put('/:subjectCode', updateSubject)
routeSubject.delete('/:subjecCode', deleteSubject)

export default routeSubject