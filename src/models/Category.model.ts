import { Schema, model } from "mongoose";

const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    color: {
        type: String,
        required: true,
        default: "green"
    },
    todos: {
        type: Number,
        default: 0
    }
}, {timestamps: true});

const Category = model('Category', CategorySchema);

export default Category;