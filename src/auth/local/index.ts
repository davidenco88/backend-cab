import { Router } from 'express';

import { loginHandler, activateHandler } from './local.controller';

const router = Router();

// login -> POST -> /auth/local/login
router.post('/login', loginHandler);
router.post('/activate', activateHandler);
// change password
// reset password
// logout

export default router;
