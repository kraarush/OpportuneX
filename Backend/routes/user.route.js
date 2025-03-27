import express from 'express'
import { login, logout, register, updateProfile } from '../controllers/user.controller.js';
import authMiddleware from '../middlewares/authmiddleware.js';
import { singleUpload, uploadProfileFiles } from '../middlewares/multer.js';

const router = express.Router();

router.route('/register').post(singleUpload,register);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/profile/update').post(authMiddleware ,uploadProfileFiles, updateProfile);

export default router;