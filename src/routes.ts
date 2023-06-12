///
// Main Application routes
///
import { Application } from 'express';

//Aca importa y medio declara lo que por default se exporta en el modulo
// /api/healthcheck:
import healthcheckRouter from './api/healthcheck';
import userRouter from './api/users';
import usersByRoleRouter from './api/usersByRole';
import RolRouter from './api/roles';
import vehicleRouter from './api/vehicles';
import vehicleTypeRouter from './api/vehicleTypes';
import tripStateRouter from './api/tripStates';
import tripRouter from './api/trips';
import serviceTypeRouter from './api/serviceTypes';

function routes(app: Application) {
  app.use('/api/healthcheck', healthcheckRouter);
  app.use('/api/users', userRouter);
  app.use('/api/usersByRole', usersByRoleRouter);
  app.use('/api/roles', RolRouter);
  app.use('/api/vehicles', vehicleRouter);
  app.use('/api/vehicleTypes', vehicleTypeRouter);
  app.use('/api/tripStates', tripStateRouter);
  app.use('/api/trips', tripRouter);
  app.use('/api/serviceTypes', serviceTypeRouter);
}

export default routes;
