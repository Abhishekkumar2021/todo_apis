import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
const app = express();
const __dirname = path.resolve();
// Setting up the middlewares & other configurations
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "src/views")); //important if you are running file from outside the same folder as of index.js
app.use(express.static(path.join(__dirname, "src/public"))); //
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(cookieParser());
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
}));
export default app;
