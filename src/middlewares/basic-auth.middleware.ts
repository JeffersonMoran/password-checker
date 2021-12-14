import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class BasicAuth implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization || !authorization.startsWith("Basic")) return res.status(401).json({ message: "Missing Basic Authentication Token" });
    const encodedUsernamePassword = authorization.substring("Basic ".length).trim();

    req.user = encodedUsernamePassword;
    next();
  }
}
