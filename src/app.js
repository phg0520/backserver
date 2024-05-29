import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import characterRoutes from './routes/characterRoutes.js';
import itemRoutes from './routes/itemRoutes.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api', characterRoutes);
app.use('/api', itemRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

export default app;
