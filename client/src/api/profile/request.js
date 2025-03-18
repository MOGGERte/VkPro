import { Api } from '../api';

export const getUser = async (userId) => {
  const data = await Api.get(`/users/${userId}`);
  return data.data;
};

export const getUsers = async () => {
  const data = await Api.get('/users');
  return data.data;
};
