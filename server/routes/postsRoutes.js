import { Router } from 'express';
import upload from '../configs/multer.js';
import PostsController from '../controllers/postsController.js';

const router = Router();

// text?, images[]
router.post('/post', upload.array('images', 10), PostsController.createPost)
router.get('/posts', PostsController.getMyPosts)
router.post('/post/:postId/like', PostsController.likePost)

export default router;
