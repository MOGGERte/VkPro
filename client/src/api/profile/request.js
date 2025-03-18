import { Api } from '../api';

export const getUser = async () => {
  const data = await Api.get('/users');
  return data.data;
};
