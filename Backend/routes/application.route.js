import express from 'express';
import authMiddleware from '../middlewares/authmiddleware.js';
import authorizeRole from '../middlewares/authorizeRole.js';
import { applyJob, getApplicants, getAppliedJobs, updateStatus } from '../controllers/application.controller.js';

const router = express.Router();


router.route('/apply/:id').get(authMiddleware, authorizeRole("student"), applyJob);
router.route('/get').get(authMiddleware, authorizeRole("student"), getAppliedJobs);
router.route('/applicants/:id').get(authMiddleware, authorizeRole("recruiter"), getApplicants);
router.route('/status/update/:id').post(authMiddleware, authorizeRole("recruiter"), updateStatus);


export default router;