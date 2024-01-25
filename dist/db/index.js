import mongoose from 'mongoose';
import { DB_NAME } from '../constants.js';
async function connectToDatabase() {
    try {
        const conn = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log(`Connected to database at ${conn.connection.host}`);
    }
    catch (error) {
        console.error(error);
        throw new Error('Database connection failed');
    }
}
export default connectToDatabase;
