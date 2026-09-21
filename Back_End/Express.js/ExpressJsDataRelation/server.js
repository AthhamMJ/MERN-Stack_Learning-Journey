import express from "express";
import dotEnv from "dotenv";
import connectDB from "./config/db.js";
import bodyParser from "body-parser";
import routeStudent from "./routes/studentRoute.js";
import routeSubject from "./routes/subjectRoute.js";
import routeExamResults from "./routes/examResultsRoute.js";


const app = express()

dotEnv.config();

app.use(bodyParser.json());

app.use("/api/student", routeStudent)
app.use("/api/subject", routeSubject)
app.use("/api/exam", routeExamResults)


connectDB();

const PORT = process.env.PORT


app.listen(PORT,() =>{
    console.log(`Server is Running at http://localhost:${PORT}`);
});

