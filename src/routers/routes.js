import { Router } from 'express';
import userRoutes from './agente.routes.js';

const router = Router();

router.use('/', userRoutes);

router.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public' });
});

export default router;
