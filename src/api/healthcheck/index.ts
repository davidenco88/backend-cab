import { Router } from 'express';

import { healthCheckHandler } from './healthcheck.controller';

const router = Router();

router.get('/', healthCheckHandler);

export default router;
