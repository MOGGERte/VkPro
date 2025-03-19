import { Api } from '../api';

export const getNews = async () => {
  const data = await Api.get('/news');
  return data.data;
};

export const getUserPosts = async (userId) => {
  const data = await Api.get(`/posts/user/${userId}`);
  return data.data;
};
