import { Router } from "express";
import {
  createDiscountCodeHandler,
  getAllDiscountCodeHandler,
  getDiscountCodeByIdHandler,
  updateDiscountCodeHandler,
  deleteDiscountCodeHandler,
} from './discountCodes.controller'

const discountCodeRouter = Router();

// /api/DiscountCodes --> POST
discountCodeRouter.post('/', createDiscountCodeHandler);

// /api/DiscountCodes --> GET
discountCodeRouter.get('/', getAllDiscountCodeHandler);

// /api/DiscountCodes/:id --> GET
discountCodeRouter.get('/:id', getDiscountCodeByIdHandler);

// /api/DiscountCodes --> PATHC
discountCodeRouter.patch('/:id', updateDiscountCodeHandler);

// /api/DiscountCodes --> DELETE
discountCodeRouter.patch('/delete/:id', deleteDiscountCodeHandler);


export default discountCodeRouter;

