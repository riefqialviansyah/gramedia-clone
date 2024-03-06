import jwt, { JwtPayload } from "jsonwebtoken";
const secret = process.env.JWT_SECRET as string;

export const createToken = (paylod: JwtPayload) => {
  return jwt.sign(paylod, secret);
};
