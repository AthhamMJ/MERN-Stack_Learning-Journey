import express from "express";
import dotEnv from "dotenv";
import connectDB from "./config/db.js";

dotEnv.config();
connectDB();

const PORT = process.env.PORT
const app = express();


app.listen(PORT,() =>{
    console.log(`Server is Running at http://localhost:${PORT}`);
});

