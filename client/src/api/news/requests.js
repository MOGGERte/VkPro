import { Api } from '../api';

export const getNews = async () => {
  const data = await Api.get('/posts');
  return data.data;
};
