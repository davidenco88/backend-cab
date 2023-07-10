import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
const cloudinary = require('cloudinary').v2;
require('dotenv').config();
import {
  createUser,
  getAllUser,
  getUserById,
  updateUser,
  deleteUser,
  getAllUserWithRoles,
  updateUserAvatar
} from './users.service';
import { CreateUser } from './users.type';
import { sendMailSendGrid } from '../../auth/utils/validationMail';

export async function createUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data: CreateUser = req.body;

  console.log(data);

  if (Object.keys(data).length === 0) {
    return res
      .status(400)
      .json({ message: 'Missing required information in the request body' });
  }

  try {
    const user = await createUser(data);

    const url = `${process.env.FRONT_END_URL}/activate-account/${user.passwordResetToken}`;
    const dataMail = {
      to: data.email,
      from: 'CAB <david.sarriav@gmail.com>', // Use the email address or domain you verified above
      subject: 'Welcome to the CAB App',
      templateId: 'd-8ea90ba6b4304922b50570fcdc4aae31',
      dynamicTemplateData: {
        url,
      },
    };

    console.log(dataMail);
    sendMailSendGrid(dataMail);

    return res.status(201).json(user);
  } catch (error) {
    return next(error);
  }
}

export async function getAllUserHandler(req: Request, res: Response) {
  const users = await getAllUser();
  return res.json(users);
}

export async function getAllUserInfoHandler(req: Request, res: Response) {
  const users = await getAllUserWithRoles();
  return res.json(users);
}

export async function getUserByIdHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);

  try {
    const user = await getUserById(integerId);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    return res.json(user);
  } catch (error) {
    return next(error);
  }
}
export async function deleteUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);

  try {
    const user = await deleteUser(integerId);
    return res.json(user);
  } catch (error) {
    return next(error);
  }
}

export async function updateUserHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);
  const data = req.body;
  console.log(data);
  try {
    const user = await updateUser(integerId, data);
    return res.json(user);
  } catch (error) {
    return next(error);
  }
}

export async function updateUserAvatarHandler(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const integerId = Number(id);
  const file = req.file;
  let data = {};
  const maxSize  = 1024 * 1024 * 2;

  cloudinary.config({
    cloud_name: 'dltibnft3',
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
  });

  if (req.file && file) {
    if (file.size > maxSize) {
      fs.unlinkSync(req.file.path);
      return res.status(400).json({ message: 'File exceeds 5mb limit' });
    }

    try {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: 'profile-images',
        use_filename: true,
        unique_filename: true,
        width: 400,
        height: 400,
        gravity: 'faces',
        crop: 'thumb',
        zoom: 0.8,
      })

      data = { avatar: result.url };
      fs.unlinkSync(req.file.path);

    } catch (error) {
      return res.status(500).json(error);
    }
  }

  try {
    const user = await updateUserAvatar(integerId, data);
    const profile = {
      id: user.id,
      fullName: `${user.name} ${user.lastname}`,
      avatar: user.avatar,
      email: user.email,
      roles: user.UserByRole.map(({ Rol }) => ({
        id: Rol.id,
        name: Rol.name,
      })),
    };

    return res.status(200).json(profile);
  } catch (error) {
    return res.status(500).json(error);
  }
}

