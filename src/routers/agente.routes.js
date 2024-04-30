import { Router } from 'express';
import { auth } from '../middlewares/auth.js'; 

import {
  login,
  profile,
} from '../controllers/agente.controller.js';

const router = Router();

router.get('/SignIn', login);
router.get('/profile', auth, profile);


export default router;
