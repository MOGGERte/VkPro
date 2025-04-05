import { Router } from 'express';
import authController from '../controllers/authController.js';
import { loginValidator, registrationValidator } from '../middlewares/authValidators.js';

const router = Router();

// email, password, firstName, secondName?
router.post('/registration', registrationValidator, authController.registration);
// email, password
router.post('/login', loginValidator, authController.login);
router.post('/logout', authController.logout);
router.get('/confirm_email/:link', authController.confirmEmail);
router.get('/refresh', authController.refreshToken);

export default router;
