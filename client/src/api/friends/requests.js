import { Api } from '../api';

export const getFriends = async () => {
  const data = await Api.get('/friends');
  return data.data;
};
