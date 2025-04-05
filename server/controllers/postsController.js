import { ApiError } from '../components/ApiError.js';
import { CreatePostErrors } from '../errorMessages/post/CreatePost.js';
import postService from '../services/postService.js';
import { LikePostErrors } from '../errorMessages/post/LikePost.js';

class PostsController {
  async createPost(req, res, next) {
    try {
      const { text } = req.body;
      const userId = req.userId;

      if (!text && (!req.files || req.files.length === 0)) {
        next(ApiError.BadRequest(CreatePostErrors.textAndImagesNotSet));
        return;
      }

      const data = await postService.createPost(userId, text, req.files);

      res.status(201).json(data);
    } catch (e) {
      next(e);
    }
  }

  async getMyPosts(req, res, next) {
    try {
      const data = await postService.getUserPosts(req.userId);

      res.status(200).json(data);
    } catch (e) {
      next(e);
    }
  }

  async likePost(req, res, next) {
    try {
      const { postId } = req.params;
      const userId = req.userId;

      if (!postId || isNaN(parseInt(postId))) {
        next(ApiError.BadRequest(LikePostErrors.postIdIncorrect));
        return;
      }

      const data = await postService.likePost(userId, postId);

      res.status(200).json(data);

    } catch (e) {
      next(e);
    }
  }
}

export default new PostsController();