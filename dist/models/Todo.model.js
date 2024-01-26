import { Schema, model, Types } from "mongoose";
const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        minLength: 10
    },
    completed: {
        type: Boolean,
        default: false,
    },
    category: {
        type: Types.ObjectId,
        ref: 'Category',
        required: true,
    },
}, { timestamps: true });
const Todo = model('Todo', TodoSchema);
export default Todo;
