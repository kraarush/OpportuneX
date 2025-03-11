import express from 'express';
import authMiddleware from '../middlewares/authmiddleware.js';
import authorizeRole from '../middlewares/authorizeRole.js';
import { applyJob, getAppliedJobs } from '../controllers/application.controller.js';

const router = express.Router();

router.route('/apply/:id').get(authMiddleware, authorizeRole("student"), applyJob);
router.route('/get').get(authMiddleware, authorizeRole("student"), getAppliedJobs);


export default router;
