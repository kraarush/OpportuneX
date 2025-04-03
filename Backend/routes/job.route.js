import express from 'express';
import authMiddleware from '../middlewares/authmiddleware.js';
import authorizeRole from '../middlewares/authorizeRole.js';
import { createJob, getAdminJobs, getAllJobs, getJobById } from '../controllers/job.controller.js';

const router = express.Router();

// for admins
router.route('/create').post(authMiddleware, authorizeRole("recruiter"), createJob);
router.route('/getAdminJobs').get(authMiddleware, authorizeRole("recruiter"), getAdminJobs);

// for students
router.route('/get').get(getAllJobs);
router.route('/get/:id').get(getJobById);



export default router;
