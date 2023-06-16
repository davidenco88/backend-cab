import jwt from 'jsonwebtoken';

import { PayloadType } from './auth.types';

const SECRET = process.env.JWT_SECRET as string;

/**
 * Validates the token
 * @param token JWT token
 * @returns PayloadType | null
 */
export function verifyToken(token: string) {
  try {
    const decoded = jwt.verify(token, SECRET);

    return decoded;
  } catch (error) {
    return null;
  }
}

/**
 * Generates a token
 * @param payload Payload to be signed
 * @returns string
 */
export function signToken(payload: PayloadType) {
  const token = jwt.sign(payload, SECRET);

  return token;
}
