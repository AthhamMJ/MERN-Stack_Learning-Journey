import express from 'express'
import dotEnv from 'dotenv'
import mongoose from 'mongoose'

dotEnv.config()

const app = express()
const PORT = process.env.PORT
const MONGOURL = process.env.MONGOURL

// app.get('/', (req, res) =>{
//     res.send("Home page")
// })

// app.get('/about', (req, res)=>{
//     res.send("About Page")
// })

// app.listen(PORT, ()=> {
//     console.log(`Server is running in http://localhost:${PORT}`)
// })

mongoose.connect(MONGOURL).then(() =>{
    console.log("Database Connected Successfully")
    app.listen(PORT, ()=>{
        console.log(`Server is running at http://localhost:${PORT}`)
    })
})