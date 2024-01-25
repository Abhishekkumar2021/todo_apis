import dotenv from 'dotenv';
import connectToDatabase from './db/index.js';
import app from './app.js';
import todoRoutes from './routes/todo.routes.js';
import homeRoutes from './routes/home.routes.js';
import errorRoutes from './routes/error.routes.js';
dotenv.config();
const PORT = process.env.PORT || 5000;
// To connect to the database and start the server
const connectAndStart = async () => {
    try {
        await connectToDatabase();
        app.listen(PORT, () => {
            console.log(`You can access the server at http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error(error);
    }
};
connectAndStart(); // To connect to the database and start the server
// routes
app.use("/", homeRoutes);
app.use('/api/v1/todos', todoRoutes);
app.use("*", errorRoutes);
