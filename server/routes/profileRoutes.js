import { Router } from 'express';
import ProfileController from '../controllers/profileController.js';
import upload from '../configs/multer.js';

const router = Router();

router.get('/profile', ProfileController.getProfile);
// avatar: File
router.post('/avatar', upload.single('avatar'), ProfileController.setAvatar);

export default router;
