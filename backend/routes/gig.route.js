import express from 'express';
import { verifyToken } from '../middleware/jwt.js';
import { createGig,deleteGig,getGig,getGigs } from '../controller/product/gig.controller.js';

const router = express.Router();
router.post('/creategig',verifyToken, createGig)
router.delete('/gig/:id',verifyToken, deleteGig)
router.get('/:id',verifyToken,  getGig)
router.get('/',verifyToken, getGigs)

export default router ;
