import { Api } from '../api';

export const updatePostLike = async (postId, isLiked) => {
  await Api.post(`/posts/${postId}/like`, { isLiked });
};
