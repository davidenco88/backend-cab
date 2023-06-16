import { Router } from 'express';

import { loginHandler } from './local.controller';

const router = Router();

// login -> POST -> /auth/local/login
router.post('/login', loginHandler);

// change password
// reset password
// activate account
// logout

export default router;
