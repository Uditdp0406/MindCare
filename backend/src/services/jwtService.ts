import jwt, { SignOptions } from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "default_secret";
const JWT_EXPIRES_IN_ENV = process.env.JWT_EXPIRES_IN || "7d";

/**
 * Convert the env string into the exact type expected by jsonwebtoken.
 * We do this small unknown-cast dance because different versions of the
 * types package accept slightly different types (string | number | specific union).
 *
 * This keeps the code typed without sprinkling `any` everywhere.
 */
const expiresIn: SignOptions["expiresIn"] = (JWT_EXPIRES_IN_ENV as unknown) as SignOptions["expiresIn"];

export function signJwt(payload: object): string {
  const options: SignOptions = {
    algorithm: "HS256",
    expiresIn,
  };

  return jwt.sign(payload, JWT_SECRET, options);
}

export function verifyJwt<T = any>(token: string): T {
  return jwt.verify(token, JWT_SECRET) as T;
}
