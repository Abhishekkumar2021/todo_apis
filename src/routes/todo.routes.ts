import { Router } from "express";
import { getTodos } from "../controllers/todo.controllers.js";

const router = Router();

router.get('/', getTodos);

export default router;