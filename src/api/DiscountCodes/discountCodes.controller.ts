import { Request, Response, NextFunction } from 'express';
import {
  createDiscountCode,
  getAllDiscountCode,
  getDiscountCodeById,
  updateDiscountCode,
  deleteDiscountCode,
} from './discountCodes.service'

export async function createDiscountCodeHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;

  try {
    const code = await createDiscountCode(data);

    return res.json(code);
  } catch (error) {
    return next(error);
  }
}

export async function getAllDiscountCodeHandler(req: Request, res: Response) {
  const codes = await getAllDiscountCode();
  return res.json(codes);
}

export async function getDiscountCodeByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);

  try {
     const code = await getDiscountCodeById(integerId);

    if (!code) {
      return res.status(404).json({ message: 'code not found' });
    }

    return res.json(code);
  } catch (error) {
    return next(error);
  }
}
export async function deleteDiscountCodeHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);


  try {
    const code = await deleteDiscountCode(integerId);
    return res.json(code);
  } catch (error) {
    return next(error);
  }
}

export async function updateDiscountCodeHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);
  const data = req.body;

  try {
    const code = await updateDiscountCode(integerId, data);
    return res.json(code);
  } catch (error) {
    return next(error);
  }
}
