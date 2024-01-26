import { Request, Response } from "express";
import Todo from "../models/Todo.model.js";
import Category from "../models/Category.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import AsyncHandler from "../utils/AsyncHandler.js";
import { Types } from "mongoose";
import ApiError from "../utils/ApiError.js";

const getTodos = AsyncHandler(async (req: Request, res: Response) => {
    const todos = await Todo.find({})
    res.status(200).json(new ApiResponse(200, 'Successfully retrieved todos', { todos }));
});

const getTodoById = AsyncHandler(async (req: Request, res: Response) => {
    const {todoId} = req.params;
    // check if this id is valid
    if (!Types.ObjectId.isValid(todoId)) {
        throw new ApiError(400, 'Invalid todo id')
    }

    const todo = await Todo.findById(todoId)

    if (!todo) {
        throw new ApiError(404, 'Todo not found')
    }

    res.status(200).json(new ApiResponse(200, 'Successfully retrieved todo', { todo }));

});

const createTodo = AsyncHandler(async (req: Request, res: Response) => {
    const { title, description, category } = req.body;
    // Find the category id from the category name
    const todo = await Todo.create({ title, category, description })
    await Category.findByIdAndUpdate(category, { $inc: { todos: 1 } })
    res.status(201).json(new ApiResponse(201, 'Successfully created todo', { todo }));
});

const updateTodo = AsyncHandler(async (req: Request, res: Response) => {
    const { todoId } = req.params;
    const update = req.body;
    // check if this id is valid
    if (!Types.ObjectId.isValid(todoId)) {
        throw new ApiError(400, 'Invalid todo id')
    }

    const todo = await Todo.findByIdAndUpdate(todoId, update, { new: true })

    res.status(200).json(new ApiResponse(200, 'Successfully updated todo', { todo }));

});

const deleteTodo = AsyncHandler(async (req: Request, res: Response) => {
    const { todoId } = req.params;
    // check if this id is valid
    if (!Types.ObjectId.isValid(todoId)) {
        throw new ApiError(400, 'Invalid todo id')
    }

    const todo = await Todo.findByIdAndDelete(todoId)
    if(!todo) {
        throw new ApiError(404, 'Todo not found')
    }

    await Category.findByIdAndUpdate(todo.category, { $inc: { todos: -1 } })
    res.status(200).json(new ApiResponse(200, 'Successfully deleted todo', { todo }));
});

export { getTodos, getTodoById, createTodo, updateTodo, deleteTodo }