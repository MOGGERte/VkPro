import { Api } from '../api';

export const updatePostLike = async (postId, isLiked, userId) => {
  await Api.post(`/posts/${postId}/like`, { isLiked, userId });
};

export const getPostWithComments = async (postId) => {
  const data = await Api.get(`/posts/${postId}`);
  return data.data;
};
