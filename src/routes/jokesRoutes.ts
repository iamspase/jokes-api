import express, { Router } from 'express';
import { createJoke, deleteJoke, getAmount, getJokes, updateJoke } from '../controllers/jokeController';

export const jokesRouter: Router = express.Router();

jokesRouter.post("/create", createJoke);
jokesRouter.delete("/delete", deleteJoke);
jokesRouter.get("/amount", getAmount);