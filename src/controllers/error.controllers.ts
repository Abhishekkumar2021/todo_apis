import AsyncHandler from "../utils/AsyncHandler.js";
import { Request, Response } from "express";

const errorPage = AsyncHandler(async (req: Request, res: Response) => {
    res.render('error');
});

export { errorPage }