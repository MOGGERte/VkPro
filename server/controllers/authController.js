import authService from '../services/authService.js';
import { ApiError } from '../components/ApiError.js';
import { checkValidationErrors } from '../utils/checkValidationErrors.js';
import { CommonErrors } from '../errorMessages/CommonErrors.js';

class AuthController {
  async registration(req, res, next) {
    try {
      checkValidationErrors(req, next);

      const { email, password, firstName, secondName } = req.body;
      const { ip } = req;
      const userAgent = req.headers['user-agent'];

      if (!ip || !userAgent) {
        next(ApiError.BadRequest(CommonErrors.agentError));
        return;
      }

      const { tokens } = await authService.registration({
        email,
        password,
        ip,
        userAgent,
        firstName,
        secondName
      });
      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true
      });

      res.status(201).json({ accessToken: tokens.accessToken });
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      checkValidationErrors(req, next);

      const { email, password } = req.body;
      const { ip } = req;
      const userAgent = req.headers['user-agent'];

      if (!ip || !userAgent) {
        next(ApiError.BadRequest(CommonErrors.agentError));
        return;
      }

      const { tokens } = await authService.login({ email, password, ip, userAgent });
      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true
      });

      res.status(200).json({ accessToken: tokens.accessToken });
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      if (!refreshToken) {
        console.log('logout without refreshToken');
        res.status(200).json();
        return;
      }
      await authService.logout(refreshToken);
      res.clearCookie('refreshToken');
      res.status(200).json();
    } catch (e) {
      next(e);
    }
  }

  async confirmEmail(req, res, next) {
    try {
      const activationLink = req.params.link;
      await authService.confirmEmail(activationLink);

      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }

  async refreshToken(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const { ip } = req;
      const userAgent = req.headers['user-agent'];

      if (!ip || !userAgent) {
        next(ApiError.BadRequest(CommonErrors.agentError));
        return;
      }

      const { tokens } = await authService.refreshToken({ refreshToken, ip, userAgent });
      res.cookie('refreshToken', tokens.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: true
      });
      res.status(200).json({ accessToken: tokens.accessToken });
    } catch (e) {
      next(e);
    }
  }
}

export default new AuthController();
