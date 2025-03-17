import { Api } from '../api';

export const getNews = async () => {
  const data = await Api.get('/posts');
  console.log(data);
  return data.data;
};

export const getUserPosts = async (userId) => {
  const news = await getNews();
  return news.filter((post) => post.customerId === userId);
};
