import express from 'express';
import authMiddleware from '../middlewares/authmiddleware.js';
import { authorizeRole } from '../middlewares/authorizeRole.js';
import { createJob } from '../controllers/job.controller.js';

const router = express.Router();

router.route('/create').post(authMiddleware, authorizeRole("recruiter"), createJob);

export default router;
