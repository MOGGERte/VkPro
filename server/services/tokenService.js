import jwt from 'jsonwebtoken';
import db from '../configs/db.js';

class TokenService {
  generateAccessRefreshToken(payload = {}) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET, {
      expiresIn: '15m'
    });
    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {
      expiresIn: '30d'
    });

    return {
      accessToken,
      refreshToken
    };
  }

  async saveRefreshToken({
    refreshToken,
    ip,
    userAgent,
    userId
  }) {
    await db.tx(async (t) => {
      // Удаляем старую запись
      await t.none(
        `DELETE
         FROM sessions
         WHERE user_id = $1
           AND user_agent = $2
           AND ip = $3`,
        [userId, userAgent, ip]
      );

      // Вставляем новую запись
      await t.none(
        `INSERT INTO sessions (user_id, user_agent, ip, token, created_at)
         VALUES ($1, $2, $3, $4, NOW())`,
        [userId, userAgent, ip, refreshToken]
      );
    });
  }

  async removeRefreshToken(refreshToken) {
    await db.none(
      `DELETE
       FROM sessions
       WHERE token = $1`,
      [refreshToken]
    );
  }

  validateAccessToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_ACCESS_SECRET);
    } catch {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      return jwt.verify(token, process.env.JWT_REFRESH_SECRET);
    } catch {
      return null;
    }
  }
}

export default new TokenService();
