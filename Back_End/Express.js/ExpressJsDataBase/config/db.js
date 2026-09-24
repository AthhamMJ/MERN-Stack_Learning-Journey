import express from 'express'
import mongoose from 'mongoose'
import dotEnv from 'dotenv'

dotEnv.config()

const app = express()
const PORT = process.env.PORT
const MONGOURL = process.env.MONGOURL

