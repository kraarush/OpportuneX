import express from 'express'
import { configDotenv } from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import connectDB from './utils/db.js';
import userRoutes from './routes/user.route.js';
import companyRoutes from './routes/company.route.js';
import jobRoutes from './routes/job.route.js';
import applicationRoutes from './routes/application.route.js';
import axios from 'axios';


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






// pinging the backend server
app.get('/pinging', (req,res) => {
    res.send("hello");
});

const url = 'https://opportunex.onrender.com/pinging';

function getRandomInterval(minMinutes, maxMinutes) {
    const minMilliseconds = minMinutes * 60 * 1000;
    const maxMilliseconds = maxMinutes * 60 * 1000;
    return Math.floor(Math.random() * (maxMilliseconds - minMilliseconds + 1)) + minMilliseconds;
}

async function pingServer() {
    try {
        const response = await axios.get(url);
        console.log(`Ping successful at ${new Date().toISOString()}: Status Code ${response.status}`);
    } catch (error) {
        console.error(`Ping failed at ${new Date().toISOString()}:`, error.message);
    } finally {
        const nextInterval = getRandomInterval(12, 16);
        console.log(`Next ping scheduled in ${(nextInterval / 60000).toFixed(2)} minutes.`);
        setTimeout(pingServer, nextInterval);
    }
}

pingServer();