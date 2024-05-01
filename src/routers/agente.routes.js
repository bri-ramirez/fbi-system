import { Router } from 'express';
import { auth } from '../middlewares/auth.js'; 

import {
  login,
  home,
  profile,
} from '../controllers/agente.controller.js';

const router = Router();

router.get('/SignIn', login);
router.get('/home', auth, home);
router.get('/profile', auth, profile);

export default router;
