import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv"
import cors from "cors"
import authRouter from "./Routes/auth.js"

const app = express()
dotenv.config()

// Contacts
const PORT = process.env.PORT || 5001
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME

// Middleware
app.use(cors())
app.use(express.json())

app.use('/api/auth', authRouter)

async function start() {
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.4wdkbue.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)

        app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
}

start()