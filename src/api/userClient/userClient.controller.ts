import { Request, Response } from 'express';
import { CreateUserClient } from './userClient.types';
import { createUserClient } from './userClient.services';

export async function createUserClientHandler(req: Request, res: Response) {
  const data: CreateUserClient = req.body;

  const user = await createUserClient(data);

  return res.status(201).json(user);
}
