import { Schema, model } from "mongoose";
const CategorySchema = new Schema({
    name: {
        type: String,
        required: true,
        enum: ['Work', 'Personal', 'College', 'Other'],
    },
});
const Category = model('Category', CategorySchema);
export default Category;
