import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { defaultRouter } from './routes/api';
import { log } from './middlewares/logger';
dotenv.config({path: "src/.env"});

const app: Application = express();
app.use(express.json());
app.use(log);
app.use("/api", defaultRouter);

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