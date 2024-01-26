import mongoose, { Types } from "mongoose";
import Todo from "../models/Todo.model.js";
import Category from "../models/Category.model.js";

async function addTodo(title: string, category: Types.ObjectId, description: string) {
    try {
        const todo = await Todo.create({ title, category, description });
        await increaseTodoCount(category);
        console.log(`Todo ${todo.title} created`);
    } catch (error) {
        console.log(error);
    }
}

async function increaseTodoCount(categoryId: Types.ObjectId) {
    try {
        await Category.findByIdAndUpdate(categoryId, { $inc: { todos: 1 } });
    } catch (error) {
        console.log(error);
    }
}

async function seedTodo() {
    try {
        const categories = await Category.find({});
        for(let category of categories) {
            await addTodo('Todo 1', category._id, 'This is a todo');
            await addTodo('Todo 2', category._id, 'This is a todo');
            await addTodo('Todo 3', category._id, 'This is a todo');
        }
    } catch (error) {
        console.log(error);
    }   
}

async function clearTodo() {
    try {
        await Todo.deleteMany({});
        console.log('Cleared all todos');
    } catch (error) {
        console.log(error);
    }
}

export {seedTodo, clearTodo}