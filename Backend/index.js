import express from 'express'
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';    
import connectDB from './utils/db.js';

configDotenv();
const app = express();
const PORT = process.env.BACKEND_PORT;


// middlewares
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser());
const corsOption = {
    origin: 'http://localhost:5173',
    credentials:true
}
app.use(cors(corsOption));

app.get('/', async(req, res) => {
    return res.status(200).json({
        message: "I am here ",
        success: true
    });
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is live on port: ${PORT}`);
});