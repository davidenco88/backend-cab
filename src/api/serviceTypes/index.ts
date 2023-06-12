import { Router } from "express";
import {
  createServiceTypeHandler,
  getAllServiceTypeHandler,
  getServiceTypeByIdHandler,
  updateServiceTypeByIdHandler,
  deleteServiceTypeHandler,
} from './serviceTypes.controller'

const serviceTypeRouter = Router();

// /api/users --> POST
serviceTypeRouter.post('/', createServiceTypeHandler);

// /api/users --> GET
serviceTypeRouter.get('/', getAllServiceTypeHandler);

// /api/users/:id --> GET
serviceTypeRouter.get('/:id', getServiceTypeByIdHandler);

// /api/users --> PATHC
serviceTypeRouter.patch('/:id', updateServiceTypeByIdHandler);

// /api/users --> DELETE
serviceTypeRouter.patch('/delete/:id', deleteServiceTypeHandler);


export default serviceTypeRouter;
