import express from 'express';
import authMiddleware from '../middlewares/authmiddleware.js';
import { authorizeRole } from '../middlewares/authorizeRole.js';
import { createJob, getAllJobs, getJobById } from '../controllers/job.controller.js';

const router = express.Router();

router.route('/create').post(authMiddleware, authorizeRole("recruiter"), createJob);
router.route('/getAllJobs').get(authMiddleware, getAllJobs);
router.route('/getJobById/:id').get(authMiddleware, getJobById);



export default router;
