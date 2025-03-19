import { Api } from '../api';

export const getNews = async () => {
  const data = await Api.get('/news');
  return data.data;
};
