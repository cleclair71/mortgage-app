import express from 'express';
import { login, register, logout, newsletterSignup} from '../../controllers/auth.js';

const router = express.Router();

router.post('/auth/login', login);
router.post('/auth/register', register);
router.post('/auth/logout', logout);

router.post('/newsletter', newsletterSignup)

export default router;