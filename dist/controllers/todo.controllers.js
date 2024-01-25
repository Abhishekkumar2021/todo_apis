import Todo from "../models/Todo.model.js";
import ApiResponse from "../utils/ApiResponse.js";
import AsyncHandler from "../utils/AsyncHandler.js";
const getTodos = AsyncHandler(async (req, res) => {
    const todos = await Todo.find({}).populate('category');
    res.status(200).json(new ApiResponse(200, 'Successfully retrieved todos', todos));
});
export { getTodos };
