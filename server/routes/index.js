import express from 'express';
import authRouter from './api/auth.js'
import emailRouter from './api/email.js'

const router = express.Router();

router.use('/api', authRouter, emailRouter)

export default router;