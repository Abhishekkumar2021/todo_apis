import AsyncHandler from "../utils/AsyncHandler.js";
import { Request, Response } from "express";

const homePage = AsyncHandler(async (req: Request, res: Response) => {
    res.render('home');
});

export { homePage }
