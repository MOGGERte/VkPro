import { Api } from '../api';

export const updatePostLike = async (postId, isLiked, userId) => {
  await Api.post(`/posts/${postId}/like`, { isLiked, userId });
};
