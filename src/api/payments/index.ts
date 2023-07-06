import { Router } from 'express';
import { makePaymentHandler } from './payments.controller';

const paymentsRouter = Router();

paymentsRouter.post('/', makePaymentHandler);

export default paymentsRouter;
