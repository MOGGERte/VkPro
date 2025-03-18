import { Api } from '../api';
import { getUser } from '../profile/request.js';

export const getNews = async () => {
  const data = await Api.get('/posts');
  const posts = data.data;

  const postsWithUserInfo = [];
  for (const post of posts) {
    const user = await getUser(post.customerId);
    postsWithUserInfo.push({
      ...post,
      customer: {
        name: `${user.customer.name} ${user.customer.surName}`,
        avatar: user.customer.avatar
      }
    });
  }
  return postsWithUserInfo;
};
