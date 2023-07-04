import { Request, Response, NextFunction } from 'express';

import {
  getUserByEmail,
  getUserByToken,
  updateUser,
} from '../../api/users/users.service';
import { comparePassword } from '../utils/bcrypt';
import { signToken } from '../auth.service';

export async function loginHandler(req: Request, res: Response) {
  const { email, password } = req.body;

  try {
    const user = await getUserByEmail(email);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if(!user.isActive) {
      return res.status(401).json({ message: 'Account has not been activated or account has been deleted' });
    }

    // compare password
    const isMatch = await comparePassword(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ message: 'Email or password not match' });
    }

    // jwt
    const payload = {
      id: user.id,
      email: user.email,
    };
    const token = signToken(payload);

    const profile = {
      fullName: `${user.name} ${user.lastname}`,
      avatar: user.avatar,
      roles: user.UserByRole.map(({ Rol }) => ({
        id: Rol.id,
        name: Rol.name,
      })),
    };

    return res.json({ token, profile });
  } catch (error) {
    console.log(error);
  }
}

export async function activateHandler(req: Request, res: Response) {
  const { token } = req.body;

  try {
    const user = await getUserByToken(token);

    if (!user) {
      return res.status(404).json({
        message: 'Invalid token',
      });
    }

    if (user.passwordResetExpires) {
      if (Date.now() > user.passwordResetExpires.getTime()) {
        return res.status(400).json({
          message: 'Token expired',
        });
      }
    }

    const data = {
      id: user.id,
      isActive: true,
      passwordResetToken: undefined,
      passwordResetExpires: undefined,
    };

    await updateUser(data.id, data);

    // jwt
    const payload = {
      id: user.id,
      email: user.email,
    };
    const loginToken = signToken(payload);

    const profile = {
      fullName: `${user.name} ${user.lastname}`,
      avatar: user.avatar,
      roles: user.UserByRole.map(({ Rol }) => ({
        id: Rol.id,
        name: Rol.name,
      })),
    };

    return res.status(200).json({ loginToken, profile });
  } catch (error) {
    console.log(error);
  }
}
