import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({path: "src/.env"});

const app: Application = express();

const PORT: number = 8080;
const MONGO_URI: string = process.env.MONGO_URI!;

mongoose.connect(MONGO_URI).then(() => {
    console.log("Database running.");
}).catch((error) => {
    console.log(error);
})

app.listen(PORT, () => {
    console.log("Server up.");
})