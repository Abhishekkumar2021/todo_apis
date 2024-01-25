import { Router } from "express";
import { errorPage } from "../controllers/error.controllers.js";
const router = Router();
router.get('/', errorPage);
export default router;
