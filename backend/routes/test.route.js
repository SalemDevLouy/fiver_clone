import express from 'express';
import { test } from '../controller/test.controller.js';
import { verifyToken } from '../middleware/jwt.js';

const router = express.Router();

router.get('/', verifyToken, test);
export default router;