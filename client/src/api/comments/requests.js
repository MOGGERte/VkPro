import { Api } from '../api';

export const getPostComments = async (postId) => {
  const data = await Api.get(`/posts/${postId}/comments`);
  return data.data;
};

export const createComment = async (postId, userId, commentText) => {
  await Api.post(`/post/${postId}/comment`, { userId, commentText });
};

export const updatedComment = async (postId, commentId, commentText) => {
  await Api.put(`/post/${postId}/comment/${commentId}`, { commentText });
};

export const deleteComment = async (postId, commentId) => {
  await Api.delete(`/post/${postId}/comment/${commentId}`);
};
