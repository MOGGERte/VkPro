import db from '../configs/db.js';
import { ApiError } from '../components/ApiError.js';
import { profileErrors } from '../errorMessages/profile/Profile.js';

class ProfileController {
  async getProfile(req, res, next) {
    try {
      const userId = req.userId;
      if (!userId) {
        next(ApiError.UnauthorizedError());
        return;
      }
      const user = await db.oneOrNone(
        `SELECT users.id,
                users.email,
                users.created_at  as "createdAt",
                users.first_name  as "firstName",
                users.second_name as "secondName",
                images.url        as avatar
         FROM users
                  left join images on users.avatar = images.id
         WHERE users.id = $1;`,
        [userId]
      );

      res.status(200).json(user);
    } catch (e) {
      next(e);
    }
  }

  async setAvatar(req, res, next) {
    try {
      const userId = req.userId;
      if (!userId) {
        next(ApiError.UnauthorizedError());
        return;
      }
      if (!req.file) {
        next(ApiError.BadRequest(profileErrors.cantSaveAvatar));
        return;
      }

      const fileUrl = `${process.env.API_URL}/uploads/${req.file.filename}`;

      await db.tx(async (t) => {
        const { id } = await t.one(
          `insert into images (url, user_id)
           values ($1, $2)
           returning id`,
          [fileUrl, userId]
        );

        await t.none(`update users
                      set avatar = $1
                      where id = $2`, [id, userId]);
      });

      res.status(201).json({ avatar: fileUrl });
    } catch (e) {
      next(e);
    }
  }
}

export default new ProfileController();
