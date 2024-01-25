import { NextFunction, Request, Response } from "express";
import ApiError from "./ApiError.js";

export default function AsyncHandler(handler: Function) {
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
            await handler(req, res, next);
        } catch (err: ApiError | any) {
            if (err instanceof ApiError) {
                res.status(err.status).json(err);
            } else {
                res.status(500).json(new ApiError(500, err.message || 'Internal Server Error', err, err.stack));
            }
        }
    };
}
