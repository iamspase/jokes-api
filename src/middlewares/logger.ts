import { Request, Response, NextFunction } from "express";

/**
 * Logs the date, method, path and the status code of the request
 * @returns void
 */
export function log(req: Request, res: Response, next: NextFunction): void {
    console.log(`[${Date().toString().substring(0, Date().toString().indexOf('(') - 1)}] [${req.method}] ${req.path} [${req.statusCode}]`);
    next();
}