import db from '../configs/db.js';
import { ApiError } from '../components/ApiError.js';
import { LikePostErrors } from '../errorMessages/post/LikePost.js';

class PostService {
  async createPost(userId, text, files) {
    return await db.tx(async t => {
      const post = await t.one(
        'INSERT INTO posts(user_id, text) VALUES($1, $2) RETURNING id, text',
        [userId, text || null]
      );
      let images = [];
      if (files && files.length > 0) {
        const imageQueries = files.map(file => {
          const imageUrl = `${process.env.API_URL}/uploads/${file.filename}`;

          return t.one(
            'INSERT INTO images(url, user_id) VALUES($1, $2) RETURNING id, url',
            [imageUrl, userId]
          );
        });

        images = await t.batch(imageQueries);

        // Затем связываем изображения с постом
        const imagePostQueries = images.map(image => {
          return t.none(
            'INSERT INTO images_posts(image_id, post_id) VALUES($1, $2)',
            [image.id, post.id]
          );
        });

        await t.batch(imagePostQueries);
      }

      return { ...post, images: images.map(({ url }) => url) };
    });
  };

  async getUserPosts(userId) {
    return await db.task(async t => {
      // Получаем все посты пользователя
      const userPosts = await t.any(`
          SELECT p.id,
                 p.text,
                 p.created_at  as "createdAt",
                 u.first_name  as "firstName",
                 u.second_name as "secondName",
                 i.url         as avatar
          FROM posts p
                   JOIN users u ON p.user_id = u.id
                   LEFT JOIN images i ON u.avatar = i.id
          WHERE p.user_id = $1
          ORDER BY p.created_at DESC
      `, [userId]);

      if (userPosts.length === 0) {
        return [];
      }

      // Получаем дополнительные данные для каждого поста
      const postIds = userPosts.map(post => post.id);

      // Получаем изображения для постов
      const postImages = await t.any(`
          SELECT ip.post_id, i.url
          FROM images_posts ip
                   JOIN images i ON ip.image_id = i.id
          WHERE ip.post_id IN ($1:csv)
      `, [postIds]);

      // Группируем изображения по post_id
      const imagesByPostId = postImages.reduce((acc, { post_id, url }) => {
        if (!acc[post_id]) acc[post_id] = [];
        acc[post_id].push(url);
        return acc;
      }, {});

      // Получаем количество лайков для каждого поста
      const likeCounts = await t.any(`
          SELECT post_id, COUNT(*) as count
          FROM likes
          WHERE post_id IN ($1:csv)
          GROUP BY post_id
      `, [postIds]);

      // Получаем количество комментариев для каждого поста
      const commentCounts = await t.any(`
          SELECT post_id, COUNT(*) as count
          FROM comments
          WHERE post_id IN ($1:csv)
          GROUP BY post_id
      `, [postIds]);

      // Получаем количество репостов для каждого поста
      const repostCounts = await t.any(`
          SELECT post_id, COUNT(*) as count
          FROM reposts
          WHERE post_id IN ($1:csv)
          GROUP BY post_id
      `, [postIds]);

      // Проверяем, лайкал ли текущий пользователь посты
      const userLikes = await t.any(`
          SELECT post_id
          FROM likes
          WHERE post_id IN ($1:csv)
            AND user_id = $2
      `, [postIds, userId]);

      const likedPostIds = new Set(userLikes.map(like => like.post_id));

      // Формируем итоговый ответ
      return userPosts.map(post => ({
        id: post.id,
        creator: {
          firstName: post.firstName,
          secondName: post.secondName,
          avatar: post.avatar
        },
        images: imagesByPostId[post.id] || [],
        text: post.text,
        likeCount: parseInt((likeCounts.find(lc => lc.post_id === post.id) || { count: 0 }).count),
        commentCount: parseInt((commentCounts.find(cc => cc.post_id === post.id) || { count: 0 }).count),
        repostCount: parseInt((repostCounts.find(rc => rc.post_id === post.id) || { count: 0 }).count),
        isLiked: likedPostIds.has(post.id),
        createdAt: post.createdAt
      }));
    });

  }

  async likePost(userId, postId) {
    const postExists = await db.oneOrNone(
      'SELECT 1 FROM posts WHERE id = $1',
      [postId]
    );

    if (!postExists) {
      throw ApiError.BadRequest(LikePostErrors.cantFindPost);
    }

    const existingLike = await db.oneOrNone(
      'SELECT id FROM likes WHERE post_id = $1 AND user_id = $2',
      [postId, userId]
    );

    let action;

    if (existingLike) {
      // Удаляем лайк, если он уже существует
      await db.none(
        'DELETE FROM likes WHERE id = $1',
        [existingLike.id]
      );
      action = 'unliked';
    } else {
      // Добавляем лайк
      await db.none(
        'INSERT INTO likes(post_id, user_id) VALUES($1, $2)',
        [postId, userId]
      );
      action = 'liked';
    }

    // Получаем обновленное количество лайков
    const likeCount = await db.one(
      'SELECT COUNT(*) FROM likes WHERE post_id = $1',
      [postId],
      a => +a.count
    );
    return {
      action,
      likeCount,
      isLiked: action === 'liked'
    };
  }
}

export default new PostService();