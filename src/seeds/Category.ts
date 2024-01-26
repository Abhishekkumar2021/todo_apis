import mongoose from "mongoose";
import Category from "../models/Category.model.js";

async function addCategory(name: string) {
    try {
        const todo = await Category.create({ name });
        console.log(`Category ${name} created`);
    } catch (error) {
        console.log(error);
    }
}

async function seedCategory() {
    try {
        await addCategory('Work');
        await addCategory('Personal');
        await addCategory('College');
        await addCategory('Other');
    } catch (error) {
        console.log(error);
    }   
}

async function clearCategory() {
    try {
        await Category.deleteMany({});
        console.log('Cleared all categories');
    } catch (error) {
        console.log(error);
    }
}

export {seedCategory, clearCategory}