import { Router } from 'express';
import {
  login,
} from '../controllers/agente.controller.js';

const router = Router();

router.get('/SignIn', login);
router.get('/profile', login);


export default router;
