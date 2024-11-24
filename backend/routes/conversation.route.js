import express from 'express';
import { deleteUser } from '../controller/user/user.controller.js';

const router = express.Router();
router.get('/register', deleteUser)
router.get('/login', deleteUser)
router.get('/test', deleteUser)

export default router ;
