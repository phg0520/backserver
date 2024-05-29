import express from 'express';
import { createCharacterHandler, deleteCharacterHandler } from '../controllers/characterController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/characters', authMiddleware, createCharacterHandler);
router.delete('/characters/:id', authMiddleware, deleteCharacterHandler);

export default router;
