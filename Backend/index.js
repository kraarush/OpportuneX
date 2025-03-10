import express from 'express'
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';    
import connectDB from './utils/db.js';
import userRoutes from './routes/user.route.js';
import companyRoutes from './routes/company.route.js';
import jobRoutes from './routes/job.route.js';


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

// api's 
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/company', companyRoutes);
app.use('/api/v1/job', jobRoutes);


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is live on port: ${PORT}`);
});