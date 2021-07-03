import * as jwt from 'jsonwebtoken';
import { secret } from '../config/auth.secret';
import {Request, Response, NextFunction} from 'express'

export const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token: any = req.headers.authorization;
    if (!token) {
      return res.status(403).send({ message: "Nenhum token enviado" });
    }
    jwt.verify(token.split(' ')[1], secret, (err: Error, decoded: { id: any; } ) => {
      if (err) {
        return res.status(401).send({ message: "Não autorizado" });
      }
      req.body._id = decoded.id;
      next();
    });
};

