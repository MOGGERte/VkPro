import { useEffect, useState } from 'react';
import { getNews } from '../../api/news/requests.js';
import { getUser } from '../../api/profile/request.js';
import { Post } from '../Post/Post.jsx';
import { Loading } from '../LoadingPage';
import s from './styles.module.css';

export const News = () => {
  const [news, setNews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const userInfo = async () => {
      setIsLoading(true);
      const newsData = await getNews();
      const newsWithUserInfo = await Promise.all(
        newsData.map(async (post) => {
          const user = await getUser(post.customerId);
          return {
            ...post,
            customer: {
              name: `${user.customer.name} ${user.customer.surName}`,
              avatar: user.customer.avatar
            }
          };
        })
      );
      setNews(newsWithUserInfo);
      setIsLoading(false);
    };

    userInfo();
  }, []);

  if (isLoading) return <Loading />;

  return (
    <div className={s.newsContainer}>
      {news.map((post) => (
        <Post
          key={post.id}
          customer={post.customer}
          customerId={post.customerId}
          photoUrl={post.photoUrl}
          text={post.text}
          likesCounter={post.likesCounter}
          commentsCounter={post.commentsCounter}
          repostsCounter={post.repostsCounter}
        />
      ))}
    </div>
  );
};
