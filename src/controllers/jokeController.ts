import { Request, Response } from 'express';
import Joke from '../models/joke';

let status: number;

/**
 * Creates a joke with the given title, answer (optional) and categories
 * @returns Promise<void> 
 */
export async function createJoke(req: Request, res: Response): Promise<void> {
    const { title, answer, category } = req.body;

    if(!title) {
        status = 400;
        res.status(status).json({status, error: "Please provide a title"});
        return;
    }

    if(!category) {
        status = 400;
        res.status(status).json({status, error: "Please provide a category"});
        return;
    }

    const joke = new Joke({title, answer, category});

    await joke.save();
    status = 200;
    res.status(200).json({status, message: joke});
}

/**
 * Sends back jokes
 * The default amount of jokes to be sent is 10 if NO 'amount' query param are passed
 * @returns Promise<void>
 */
export async function getJokes(req: Request, res: Response): Promise<void> {

    // TODO
}   

/**
 * Sends back a single random joke with the given categories if any
 * @returns Promise<void>
 */
export async function getRandomJoke(req: Request, res: Response): Promise<void> {
    // TODO
}

/**
 * Updates the joke data (title, answer, categories) from the given ID
 * @returns Promise<void>
 */
export async function updateJoke(req: Request, res: Response): Promise<void> {
    // TODO
}

/**
 * Deletes a joke with the given joke ID
 * @returns Promise<void>
 */
export async function deleteJoke(req: Request, res: Response): Promise<void> {
    const { id } = req.body;

    if(!id) {
        status = 404;
        res.status(status).json({status, error: "No ID provided"});
        return;
    }

    
    // Make sure the joke exists
    if(!await Joke.exists({_id: id})) {
        status = 400;
        res.status(status).json({status, error: "Joke not found."});
        return;
    }
    
    const joke = await Joke.findById(id);
    await joke?.delete();
    
    status = 200;
    res.status(status).json({status, message: "Deleted joke with ID of " + id});
}   

/**
 * Sends the amount of jokes available
 * @returns Promise<void>
 */
export async function getAmount(req: Request, res: Response): Promise<void> {
    status = 200;
    const amount = await Joke.countDocuments();
    
    res.status(status).json({status, count: amount});
}