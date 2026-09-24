import express from "express";
import dotEnv from "dotenv";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute.js"

dotEnv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGOURL = process.env.MONGOURL;

app.use(bodyParser.json());
app.use("/api/user", userRoute)

mongoose.connect(MONGOURL).then(() => {
    console.log("MongoDB Connected Successfully");
    app.listen(PORT, () => {
        console.log(`Server is Running at http://localhost:${PORT}`);
    })
}).catch((error) => {
    console.log(`Server Connection Failed ${error.message}`);
});
