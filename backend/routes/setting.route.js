import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { deleteUser } from '../controller/user.controller.js';

const router = express.Router();
router.post('/setting/:id', verifyToken,)

export default router ;
