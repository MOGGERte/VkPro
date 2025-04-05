import { ApiError } from '../components/ApiError.js';
import tokenService from '../services/tokenService.js';

export const authMiddleware = (req, res, next) => {
  try {
    // const authHeader = req.headers.authorization;
    // if (!authHeader) {
    //   next(ApiError.UnauthorizedError());
    //   return;
    // }
    //
    // const accessToken = authHeader.split(' ')[1];
    // if (!accessToken) {
    //   next(ApiError.UnauthorizedError());
    //   return;
    // }
    // const user = tokenService.validateAccessToken(accessToken);
    // if (!user) {
    //   next(ApiError.UnauthorizedError());
    //   return;
    // }
    //
    // req.userId = Number(user.id);
    // TODO убрать это и раскоментить сверху когда надо включить авторизацию
    req.userId = 1;
    next();
  } catch {
    next(ApiError.UnauthorizedError());
  }
};
