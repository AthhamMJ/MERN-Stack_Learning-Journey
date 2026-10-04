import express from "express";
import { getAllData } from "../controller/traineeController.js";

const routeTrainee = express.Router()

routeTrainee.get('/', getAllData)

export default routeTrainee