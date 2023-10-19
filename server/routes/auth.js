import express from 'express';
import { login, register, logout, newsletterSignup} from '../controllers/auth.js';

const router = express.Router();

router.post('/api/login', login);
router.post('/api/register', register);
router.post('/api/logout', logout);
router.post('/api/newsletter', newsletterSignup)

export default router;