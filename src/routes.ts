///
// Main Application routes
///
import { Application } from 'express';

//Aca importa y medio declara lo que por default se exporta en el modulo
// /api/healthcheck:
import healthcheckRouter from './api/healthcheck';
import userRouter from './api/users';

function routes(app: Application) {
  app.use('/api/healthcheck', healthcheckRouter);
  app.use('/api/users', userRouter);
}

export default routes;
