import { Router } from 'express';

import { healthCheckHandler } from './healthcheck.controller';

const router = Router();

router.get('/check', healthCheckHandler);
router.get('/', healthCheckHandler);
router.get('/anything', healthCheckHandler);

export default router;
