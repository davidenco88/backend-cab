///
// Main Application routes
///
import { Application } from 'express';

//Aca importa y medio declara lo que por default se exporta en el modulo
// /api/healthcheck:
import healthcheckRouter from './api/healthcheck';

function routes(app: Application) {
  app.use('/healthcheck', healthcheckRouter);
}

export default routes;
