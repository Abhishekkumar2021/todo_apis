import dotenv from 'dotenv';
dotenv.config();

import connectToDatabase from './db/index.js';
import app from './app.js';
import todoRoutes from './routes/todo.routes.js';
import homeRoutes from './routes/home.routes.js';
import errorRoutes from './routes/error.routes.js';
import categoryRoutes from './routes/category.routes.js';
import {seedCategory, clearCategory} from './seeds/Category.js';
import {seedTodo, clearTodo} from './seeds/Todos.js';


const PORT = process.env.PORT || 5000;


// To connect to the database and start the server
const connectAndStart = async () => {
    try {
        await connectToDatabase();
        await clearCategory();
        await seedCategory();
        await clearTodo();
        await seedTodo();
        app.listen(PORT, () => {
            console.log(
                `You can access the server at http://localhost:${PORT}`
            );
        });
    } catch (error) {
        console.error(error);
    }
};

connectAndStart(); // To connect to the database and start the server

// routes
app.use("/", homeRoutes)
app.use('/api/v1/todos', todoRoutes);
app.use('/api/v1/categories', categoryRoutes);
app.use("*", errorRoutes)

export default app;