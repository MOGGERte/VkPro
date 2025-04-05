import db from '../configs/db.js';
import bcrypt from 'bcrypt';
import * as uuid from 'uuid';
import tokenService from './tokenService.js';
import { ApiError } from '../components/ApiError.js';
import { RegistrationErrors } from '../errorMessages/auth/Registration.js';
import { ConfirmEmailErrors } from '../errorMessages/auth/ConfirmEmail.js';
import { LoginErrors } from '../errorMessages/auth/Login.js';

class AuthService {
  async registration({
                       email,
                       password,
                       firstName,
                       secondName,
                       ip,
                       userAgent
                     }) {
    const existingUser = await db.oneOrNone(
      `SELECT id
       FROM users
       WHERE email = $1`,
      [email]
    );

    if (existingUser) {
      throw ApiError.BadRequest(RegistrationErrors.emailExist);
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const activationLink = uuid.v4();

    // TODO раскомментировать если надо слать сообщения о верификации на почту
    // await mailService.sendActivationMail(
    //   email,
    //   `${process.env.API_URL}/api/confirm_email/${activationLink}`
    // );

    const newUser = await db.one(
      `INSERT INTO users (email, password_hash, confirm_email_link, first_name, second_name)
       VALUES ($1, $2, $3, $4, $5) RETURNING id`,
      [email, hashedPassword, activationLink, firstName, secondName]
    );

    const tokens = tokenService.generateAccessRefreshToken({ id: newUser.id.toString() });
    await tokenService.saveRefreshToken({
      userId: newUser.id,
      userAgent,
      ip,
      refreshToken: tokens.refreshToken
    });

    return { userId: newUser.id, tokens };
  }

  async confirmEmail(link) {
    const user = await db.oneOrNone(
      `SELECT id
       FROM users
       WHERE confirm_email_link = $1`,
      [link]
    );

    if (!user) {
      throw ApiError.BadRequest(ConfirmEmailErrors.incorrectLink);
    }

    await db.none(
      `UPDATE users
       SET is_email_confirmed = true,
           confirm_email_link = null
       WHERE id = $1`,
      [user.id]
    );
  }

  async login({
                email,
                password,
                ip,
                userAgent
              }) {
    const user = await db.oneOrNone(
      `SELECT id, password_hash
       FROM users
       WHERE email = $1`,
      [email]
    );

    if (!user) {
      throw ApiError.BadRequest(LoginErrors.emailNotExist);
    }

    const isPassEquals = await bcrypt.compare(password, user.password_hash);

    if (!isPassEquals) {
      throw ApiError.BadRequest(LoginErrors.passwordIncorrect);
    }
    const tokens = tokenService.generateAccessRefreshToken({ id: user.id.toString() });
    await tokenService.saveRefreshToken({
      userId: user.id,
      userAgent,
      ip,
      refreshToken: tokens.refreshToken
    });

    return { userId: user.id, tokens };
  }

  async logout(refreshToken) {
    await tokenService.removeRefreshToken(refreshToken);
  }

  async refreshToken({
                       refreshToken,
                       ip,
                       userAgent
                     }) {
    if (!refreshToken) {
      throw ApiError.UnauthorizedError();
    }
    const user = tokenService.validateRefreshToken(refreshToken);

    if (!user) {
      throw ApiError.UnauthorizedError();
    }

    const bdResponse = await db.oneOrNone(
      `select token
       from sessions
       where user_id = $1
         and ip = $2
         and user_agent = $3`,
      [user.id, ip, userAgent]
    );

    if (!bdResponse || bdResponse.token !== refreshToken) {
      throw ApiError.UnauthorizedError();
    }

    const tokens = tokenService.generateAccessRefreshToken({ id: user.id.toString() });
    await tokenService.saveRefreshToken({
      userId: Number(user.id),
      userAgent,
      ip,
      refreshToken: tokens.refreshToken
    });

    return { userId: user.id, tokens };
  }
}

export default new AuthService();
