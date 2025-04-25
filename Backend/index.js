import express from 'express'
import { configDotenv } from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import connectDB from './utils/db.js';
import userRoutes from './routes/user.route.js';
import companyRoutes from './routes/company.route.js';
import jobRoutes from './routes/job.route.js';
import applicationRoutes from './routes/application.route.js';


configDotenv();
const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// cors setup
const corsOption = {
    origin: ['http://localhost:5173', "https://opportunee.netlify.app"],
    credentials: true
}
app.use(cors(corsOption));


// api's 
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/company', companyRoutes);
app.use('/api/v1/job', jobRoutes);
app.use('/api/v1/application', applicationRoutes);


app.listen(PORT, () => {
    connectDB();
    console.log(`Server is live on port: ${PORT}`);
});


