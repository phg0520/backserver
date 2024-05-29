import express from 'express';
import { createItemHandler, updateItemHandler, listItemsHandler, getItemDetailsHandler } from '../controllers/itemController.js';

const router = express.Router();

router.post('/items', createItemHandler);
router.put('/items/:id', updateItemHandler);
router.get('/items', listItemsHandler);
router.get('/items/:code', getItemDetailsHandler);

export default router;
