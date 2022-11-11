import express, { Router } from 'express';
import { jokesRouter } from './jokesRoutes';

export const defaultRouter: Router = express.Router();

defaultRouter.use("/jokes", jokesRouter);