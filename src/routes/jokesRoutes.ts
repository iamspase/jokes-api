import express, { Router } from 'express';
import { createJoke, deleteJoke, getAmount, getJokeById, getJokes, updateJoke } from '../controllers/jokeController';

export const jokesRouter: Router = express.Router();

jokesRouter.post("/", createJoke);
jokesRouter.get("/", getJokes);
jokesRouter.get("/:id", getJokeById);
jokesRouter.put("/:id", updateJoke);
jokesRouter.delete("/delete", deleteJoke);
jokesRouter.get("/amount", getAmount);