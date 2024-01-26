import { Router } from "express";
import { getCategories, getTodosByCategory, getCategory, createCategory, updateCategory, deleteCategory } from "../controllers/category.controllers.js";

const router = Router();

router.get('/', getCategories);
router.post('/', createCategory);
router.get('/:categoryId', getCategory);
router.put('/:categoryId', updateCategory);
router.delete('/:categoryId', deleteCategory);
router.get('/:categoryId/todos', getTodosByCategory);

export default router;