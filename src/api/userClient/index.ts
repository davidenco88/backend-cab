import { Router } from 'express';
import { createUserClientHandler } from './userClient.controller';

const usersClientRouter = Router();

// /api/userClient --> POST
usersClientRouter.post('/', createUserClientHandler);

export default usersClientRouter;
