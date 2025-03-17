import express from 'express';
import authMiddleware from '../middlewares/authmiddleware.js';
import authorizeRole from '../middlewares/authorizeRole.js';
import { getCompanies, getCompanyById, registerCompany, updateCompany } from '../controllers/company.controller.js';

const router = express.Router();

router.route('/register').post(authMiddleware, authorizeRole("recruiter"), registerCompany);
router.route('/get').get(authMiddleware, authorizeRole("recruiter"), getCompanies);
router.route('/get/:id').get(authMiddleware, getCompanyById); // Open for all authenticated users
router.route('/update/:id').put(authMiddleware, authorizeRole("recruiter"), updateCompany);

export default router;