import { Schema, model } from "mongoose";
const TodoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
});
const Todo = model('Todo', TodoSchema);
export default Todo;
