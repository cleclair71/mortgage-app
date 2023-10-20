import express from 'express';
import { subscribe, sendMail } from '../../controllers/email.js';

const router = express.Router();

// Email related routes e.g., subscribing to newsletter, sending a form submission to our email
router.post('/subscribe', subscribe);
router.post('/send-mail', sendMail);

export default router;