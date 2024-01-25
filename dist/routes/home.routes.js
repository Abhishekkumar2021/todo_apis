import { Router } from "express";
import { homePage } from "../controllers/home.controllers.js";
const router = Router();
router.get('/', homePage);
export default router;
