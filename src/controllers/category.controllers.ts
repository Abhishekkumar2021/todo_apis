import { Request, Response } from "express";
import Category from "../models/Category.model.js";
import Todo from "../models/Todo.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { Types } from "mongoose";

const getCategories = AsyncHandler(async (req: Request, res: Response) => {
    const categories = await Category.find({})
    // Corresponding to each category find the number of todos
    const data = []
    for(let i = 0; i< categories.length; i++) {
        const todos = await Todo.find({ category: categories[i]._id })
        let allCompleted = true
        for(let todo of todos) {
            if(!todo.completed) {
                allCompleted = false
                break
            }
        }
        const category = categories[i].toObject()
        data.push({...category, completed: allCompleted})
    }
    res.status(200).json(new ApiResponse(200, 'Successfully retrieved categories', { categories: data }));
});

const getCategory = AsyncHandler(async (req: Request, res: Response) => {
    const { categoryId } = req.params;
    // check if this id is valid
    if (!Types.ObjectId.isValid(categoryId)) {
        throw new ApiError(400, 'Invalid category id')
    }
    const category = await Category.findById(categoryId)
    if (!category) {
        throw new ApiError(404, 'Category not found')
    }
    res.status(200).json(new ApiResponse(200, 'Successfully retrieved category', { category }));
});

const createCategory = AsyncHandler(async (req: Request, res: Response) => {
    const { name, color } = req.body;
    if(!name) {
        throw new ApiError(400, 'Name is required')
    }
    const category = await Category.create({ name, color })
    res.status(201).json(new ApiResponse(201, 'Successfully created category', { category }));
});

const updateCategory = AsyncHandler(async (req: Request, res: Response) => {
    const { categoryId } = req.params;
    const update = req.body;
    // check if this id is valid
    if (!Types.ObjectId.isValid(categoryId)) {
        throw new ApiError(400, 'Invalid category id')
    }

    const category = await Category.findByIdAndUpdate(categoryId, update, { new: true })

    res.status(200).json(new ApiResponse(200, 'Successfully updated category', { category }));
});

const deleteCategory = AsyncHandler(async (req: Request, res: Response) => {
    const { categoryId } = req.params;
    // check if this id is valid
    if (!Types.ObjectId.isValid(categoryId)) {
        throw new ApiError(400, 'Invalid category id')
    }
    await Category.findByIdAndDelete(categoryId)
    res.status(200).json(new ApiResponse(200, 'Successfully deleted category', {}));
});

const getTodosByCategory = AsyncHandler(async (req: Request, res: Response) => {
    const { categoryId } = req.params;
    // check if this id is valid
    if (!Types.ObjectId.isValid(categoryId)) {
        throw new ApiError(400, 'Invalid category id')
    }
    const category = await Category.findById(categoryId)
    if (!category) {
        throw new ApiError(404, 'Category not found')
    }
    const todos = await Todo.find({ category: category._id })
    res.status(200).json(new ApiResponse(200, 'Successfully retrieved todos', { todos }));
});

export { getCategories, getTodosByCategory, getCategory, createCategory, updateCategory, deleteCategory }